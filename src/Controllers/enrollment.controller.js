import Enrollment from "../Models/enrollment.model.js"

export const enrollUser = async (req, res, next) => {
  try {

    const userId = req.user.id
    const webinarId = req.params.webinarId

    const enrollment  = new Enrollment({
        webinarId,
        userId
    })

    await enrollment.save()

    res.status(201).json("user Enrolled")
  } catch (err) {
    next(err)
  }
}
