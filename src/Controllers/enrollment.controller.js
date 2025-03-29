import enrollment from "../Models/enrollment.model"

export const enrollUser = async (req, res, next) => {
  try {

    const userId = req.params.userId
    const webinarId = req.params.webinarId

    const enrollment  = await new enrollment({
        webinarId,
        userId
    })

    await enrollment.save()

    res.status(201).json("user Enrolled")
  } catch (err) {
    next(err)
  }
}
