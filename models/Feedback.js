const mongoose = require("mongoose")

const feedbackSchema = mongoose.Schema({
    body :{
        type : String,
        required : [true, "please give a message"]
    },
    user : {
        name : String,
        gender : String,
        email : {
            type : String,
            required : [true, "please provide your email"]
        }
    }
},{
    timestamps : true
})

const Feedback = mongoose.model("Feedback", feedbackSchema)

module.exports = Feedback;