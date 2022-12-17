const mongoose = require("mongoose")

const videoSchema = mongoose.Schema({
    name:{
        type: String,
        unique : true,
        trim: true,
        required: [true, "please provide a valid name"],
        maxLength: [200, "Your name is too large please provide a valid name"],
        minLength: [5, "Your name is too small"]
    },
    src :{
        type: String,
        required : [true, "please provide a valid source"]
    },
    serialNumber : {
        type : Number,
        required : true,
    },
    week : {
        name : String,
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Week"
        },
    },
    author : {
        name : String,
        email: String,
    }
},{
    timestamps : true
})

const Video = mongoose.model("Video", videoSchema)

module.exports = Video;