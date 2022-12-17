const Support = require("../models/Support")

exports.createSupportService = async (data) =>{
    return await Support.create(data);
}

exports.getSupportService = async () =>{
    return await Support.find({}).sort("-createdAt")
}

exports.supportDeleteService = async (id) => {
    return await Support.deleteOne({_id : id})
}