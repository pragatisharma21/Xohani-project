import Webinar from "../Models/webinar.model.js"
import { uploadToImagekit } from "../Utils/imagekitService.js"


export const getAllWebinars = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      order = 'desc',
      search = '',
    } = req.query

    const query = search ? { title: { $regex: search, $options: 'i' } } : {}

    const webinars = await Webinar.find(query)
      .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))

    const total = await Webinar.countDocuments(query)

    res.json({
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
      webinars,
    })
  } catch (err) {
    next(err)
  }
}

export const createWebinar = async (req, res, next) => {
  try {
    const userId = req.user.id
    const { title, description, video } = req.body

    let thumbnail = null

    if (req.files) {
      thumbnail = await uploadToImagekit(req.files.thumbnail[0], 'thumbnail')
    }

    const newWebinar = new Webinar({
      title,
      description,
      thumbnail,
      video,
      time: Date.now(),
      createdBy: userId,
    })

    await newWebinar.save()
    res.status(201).json('Webinar Created')
  } catch (err) {
    next(err)
  }
}

export const updateWebinar = async (req, res, next) => {
  try {
    const { id } = req.params
    const updates = req.body

    const webinar = await Webinar.findById(id)
    if (!webinar) return res.status(404).json({ error: 'Webinar not found' })

    if (req.file) {
      if (webinar.thumbnailFileId) {
        await deleteFromImagekit({
          url: webinar.thumbnail,
          fileId: webinar.thumbnailFileId,
        })
      }

      const uploadedThumbnail = await uploadToImagekit(req.file, 'thumbnail')
      updates.thumbnail = uploadedThumbnail.url
      updates.thumbnailFileId = uploadedThumbnail.fileId
    }

    const updatedWebinar = await Webinar.findByIdAndUpdate(id, updates, {
      new: true,
    })

    res
      .status(200)
      .json({ message: 'Webinar updated successfully', updatedWebinar })
  } catch (error) {
    next(error)
  }
}
