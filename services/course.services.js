const Course = require("../models/Course")

exports.createCourseService = async (data) =>{
    return await Course.create(data);
}

exports.getCourseService = async () =>{
    return await Course.find({})
}

exports.getCourseByIdService = async (id) =>{
    return await Course.findOne({_id : id})
}

exports.courseUpdatebyIdService = async (id, data) =>{
    return await Course.updateOne({_id : id}, data, {
        runValidators: true
    });
}

exports.courseDeleteService = async (id) => {
    return await Course.deleteOne({_id : id})
}