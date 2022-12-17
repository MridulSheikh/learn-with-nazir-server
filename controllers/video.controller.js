const {
    createVideoService,
    getVideoService,
    getVideoByIdService,
    videoUpdatebyIdService,
    videDeleteService,
  } = require("../services/video.services");
  
  exports.createVideoController = async (req, res) => {
    try {
      const result = await createVideoService(req.body);
      res.status(200).json({
        status: "success",
        message: "successfully upload video",
      });
    } catch (error) {
      res.status(401).json({
        staus: "fail",
        message: "video not upladed",
        error: error.message,
      });
    }
  };
  
  exports.getVideoController = async (req, res) => {
    try {
      const video = await getVideoService();
      if (video.length === 0) {
        return res.status(404).json({
          status: "fail",
          messgae: "videos not found",
        });
      }
      res.status(200).json({
        status: "success",
        message: "videos successfully found",
        body: video,
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        messgae: error.message,
      });
    }
  };
  
  exports.getVideoByIdController = async (req, res) => {
    try {
      const video = await getVideoByIdService(req.params.id);
      if (video === null) {
        return res.status(404).json({
          status: "fail",
          messgae: "video not found",
        });
      }
      res.status(200).json({
        status: "success",
        message: "video successfully found",
        body: video,
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        messgae: "video not found",
      });
    }
  };
  
  exports.videoUpdateByIdController = async (req, res) => {
    try {
      const result = await videoUpdatebyIdService(req.params.id, req.body);
      if (result.modifiedCount === 0) {
        return res.status(401).send({
          status: "fail",
          messgae: "video not updated",
        });
      }
      res.status(200).json({
        status: "success",
        message: "video successfully updated",
      });
    } catch (error) {
      res.status(401).json({
        status: "fail",
        messgae: "video not updated",
      });
    }
  };
  
  exports.videoDeleteContorller = async (req, res) => {
    try {
      const result = await videDeleteService(req.params.id);
      if (result.deletedCount === 0) {
        return res.status(401).json({
          status: "fail",
          message: "video not deleted",
        });
      }
      res.status(200).json({
        status: "success",
        message: "successfully deleted video",
      });
    } catch (error) {
      console.log(error.message)
      res.status(401).json({
        status: "fail",
        message: "video not deleted",
      });
    }
  };
  