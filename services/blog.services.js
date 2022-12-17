const Blog = require("../models/Blog");

exports.createBlogService = async (data) => {
  return await Blog.create(data);
};

exports.getBlogService = async (body) => {
  const { limit, page } = body;
  const res =  await Blog.find()
    .sort("-createdAt")
    .limit(limit * 1)
    .skip((page - 1) * limit);
  const count = await Blog.find({})
  const size = count.length
  return{
    res,
    size
  }
};

exports.getBlogByIdService = async (id) => {
  return await Blog.findOne({ _id : id });
};

exports.blogUpdatebyIdService = async (id, data) => {
  return await Blog.updateOne({ _id: id }, data, {
    runValidators: true,
  });
};

exports.blogDeleteService = async (id) => {
  return await Blog.deleteOne({ _id: id });
};
