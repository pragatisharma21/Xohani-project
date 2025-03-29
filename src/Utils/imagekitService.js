import imagekitSetup from '../Config/imagekit.js'

const uploadToImagekit = async (file, fileType) => {
  try {
    if (!file) {
      throw new Error('No file provided')
    }

    let folder = '/uploads'
    if (fileType === 'profileImage') {
      folder = '/profile_images'
    } else if (fileType === 'thumbnail') {
      folder = '/webinar_thumbnails'
    }

    const uploadedFile = await imagekitSetup.upload({
      file: file.buffer,
      fileName: file.originalname,
      folder: folder,
    })

    return { url: uploadedFile?.url, fileId: uploadedFile?.fileId }
  } catch (error) {
    console.error('Image Upload Error:', error)
    throw error
  }
}

const deleteFromImagekit = async (image) => {
  try {
    if (!image || !image.fileId) {
      console.log('No fileId found for image deletion')
      return false
    }

    await imagekitSetup.deleteFile(image.fileId)
    return true
  } catch (error) {
    console.error('Image Deletion Error:', error)
    return false
  }
}

export { uploadToImagekit, deleteFromImagekit }
