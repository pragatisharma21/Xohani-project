import mongoose from "mongoose"


const webinarSchema = new mongoose.Schema({
    title : {
        type : String
    }, 
    description : {
        type : String 
    },
    price : {
        type : Number
    },
    Rating : {
        type : Number
    }
})

const Webinar = mongoose.model("Webinar", webinarSchema)
export default Webinar;