const {
  createBlogService,
  getBlogService,
  getBlogByIdService,
  blogUpdatebyIdService,
  blogDeleteService,
  getBlogByTitleService
} = require("../services/blog.services");

exports.createBlogController = async (req, res) => {
  try {
    const result = await createBlogService(req.body);
    res.status(200).json({
      status: "success",
      message: "successfully create blog",
    });
  } catch (error) {
    res.status(401).json({
      staus: "fail",
      message: "blog not created",
      error: error.message,
    });
  }
};

exports.getBlogController = async (req, res) => {
  try {
    const blog = await getBlogService(req.query);
    if (blog.res.length === 0) {
      return res.status(404).json({
        status: "fail",
        messgae: "blogs not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "blogs successfully found",
      body: blog.res,
      size : blog.size
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      messgae: "blogs not found",
    });
  }
};

exports.getBlogByIdController = async (req, res) => {
  try {
    const user = await getBlogByIdService(req.params.id);
    if (user === null) {
      return res.status(404).json({
        status: "fail",
        messgae: "blog not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "blog successfully found",
      body: user,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      messgae: "blog not found",
    });
  }
};

exports.blogUpdateByIdController = async (req, res) => {
  try {
    const result = await blogUpdatebyIdService(req.params.id, req.body);
    if (result.modifiedCount === 0) {
      return res.status(401).send({
        status: "fail",
        messgae: "blog not changed",
      });
    }
    res.status(200).json({
      status: "success",
      message: "blog successfully changed",
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      messgae: "blog not changed",
    });
  }
};

exports.blogDeleteContorller = async (req, res) => {
  try {
    const result = await blogDeleteService(req.params.id);
    if (result.deletedCount === 0) {
      return res.status(401).json({
        status: "false",
        message: "blog not deleted",
      });
    }
    res.status(200).json({
      status: "success",
      message: "successfully deleted blog",
    });
  } catch (error) {
    res.status(401).json({
      status: "false",
      message: "blog not deleted",
    });
  }
};
