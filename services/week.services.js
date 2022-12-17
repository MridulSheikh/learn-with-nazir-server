const Week = require("../models/Week")
const Course = require("../models/Course")

exports.createWeekService = async (data) =>{
    const result = await Week.create(data);
    const {_id : weekId , course, no, name} = result;
    const res = await Course.updateOne({_id : course.id}, {$push : {week : {id : weekId, name, no}}})
    console.log(res)
    return result;
}

exports.getWeekService = async () =>{
    return await Week.find({})
}

exports.getWeekByIdService = async (id) =>{
    return await Week.findOne({_id : id})
}

exports.weekUpdatebyIdService = async (id, data) =>{
    return await Week.updateOne({_id : id}, data, {
        runValidators: true
    });
}

exports.weekDeleteService = async (id) => {
    const result = await Week.findOne({id})
    const {id : courseid } = result.course
    const course = await Course.findOne({_id : courseid})
    const filter = await course.week.filter(wk => id != wk.id)
    await Course.updateOne({courseid}, {$set : {week : filter}})
    return await Week.deleteOne({_id : id})
}