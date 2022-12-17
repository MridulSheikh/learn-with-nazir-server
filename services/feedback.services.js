const Feedback = require("../models/Feedback")

exports.createFeedbackService = async (data) =>{
    return await Feedback.create(data);
}

exports.getFeedbackService = async () =>{
    return await Feedback.find({}).sort("-createdAt")
}

exports.feedbackDeleteService = async (id) => {
    return await Feedback.deleteOne({_id : id})
}