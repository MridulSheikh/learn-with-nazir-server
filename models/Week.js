const mongoose = require("mongoose");


const weekSchema = mongoose.Schema({
    name: {
        type: String,
        unique : true,
        trim : true,
        unique : [true, "should provide a unique week name"],
        required: [true, "please provide week name"]
    },
    no: Number,
    course: {
        name : String,
        id : {
            type: mongoose.Schema.Types.ObjectId,
            required : true,
            ref : "Course"
        }
    },
    description : {
        type : String,
        required : [true, "please provide a description"]
    },
    video : [{
        name: String,
        id : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    }]
},{
    timestamps : true
})

const Week = mongoose.model("Week", weekSchema)

module.exports = Week;
