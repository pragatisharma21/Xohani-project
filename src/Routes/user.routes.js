import express from 'express'
import { uploadProfileImage } from '../Middlewares/uploadProfile.middleware.js'
import {
  getUserProfile,
  login,
  signUp,
} from '../Controllers/user.controller.js'

const router = express.Router()

router.post('/signup', uploadProfileImage, signUp)
router.post('/login', login)
router.get('/profile/:userId', getUserProfile)

export default router
