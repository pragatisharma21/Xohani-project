import express from 'express'
import authMiddleware from '../Middlewares/auth.middleware.js'
import {
  createWebinar,
  getAllWebinars,
  updateWebinar,
} from '../Controllers/webinar.controller.js'
import { uploadWebinarThumbnail } from '../Middlewares/uploadProfile.middleware.js'

const router = express.Router()

router.get('/', getAllWebinars)
router.post('/', authMiddleware, createWebinar)
router.put('/:id', authMiddleware, updateWebinar)

export default router
