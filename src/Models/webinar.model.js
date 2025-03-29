import mongoose from 'mongoose'

const webinarSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    description: { type: String, required: true },
    thumbnail: { type: String },
    video: { type: String, required: true },
    time: { type: Date, required: true },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true },
)

const Webinar = mongoose.model('Webinar', webinarSchema)

export default Webinar
