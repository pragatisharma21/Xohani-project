import mongoose from "mongoose"

const enrollmentSchema = new mongoose.Schema({
    webinarId : {
        type : mongoose.Schema.Types.ObjectId, ref: "Webinar"
    }, 
    userId : {
        type : mongoose.Schema.Types.ObjectId, ref : "User"
    }
})

const Enrollment = mongoose.model("enrollment", enrollmentSchema)
export default Enrollment;