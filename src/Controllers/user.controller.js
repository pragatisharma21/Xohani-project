import User from '../Models/user.model.js'
import { uploadToImagekit } from '../Utils/imagekitService.js'
import { generateToken } from '../Utils/jwtUtil.js'
import bcrypt from 'bcryptjs'

const dummyProfile = "cadscscdscscscsdcdscs.png"

export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    const isExistingUser = await User.findOne({ email })

    if (isExistingUser) {
      return res.status(400).json({ message: 'User already Registered' })
    }

    const hashedPass = await bcrypt.hash(password, 10)
    let uploadedFile = null

    if (req.file) {
      uploadedFile = await uploadToImagekit(req.file, 'profileImage')
    }

    const newUser = new User({
      name,
      email,
      password: hashedPass,
      profileImage: uploadedFile ? uploadedFile.url : dummyProfile,
      fileId: uploadedFile ? uploadedFile.fileId : null,
    })

    await newUser.save()
    res.status(201).json({ message: 'User created successfully' })
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const isAvailable = await User.findOne({ email })

    if (!isAvailable) {
      return res.status(404).json({ message: 'user is not found' })
    }

    const isValidPassword = bcrypt.compare(password, isAvailable.password)

    if (!isValidPassword) {
      res.status(400).json({ message: 'incorrect credentials' })
    }

    const jwtToken = generateToken({
      id: isAvailable._id,
      name: isAvailable.name,
      email: isAvailable.email,
    })

    res.status(200).json({ token: jwtToken })
  } catch (err) {
    next(err)
  }
}

export const getUserProfile = async (req, res, next) => {
  try {
    const userId = req.params.userId

    const user = await User.findOne({ _id: userId })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const data = {
      _id: user._id,
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
      fileId: user.fileId,
    }
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}
