const {
  createUserService,
  getUserService,
  getUserByIdService,
  userUpdatebyIdService,
} = require("../services/user.services");

exports.createUserController = async (req, res) => {
  try {
    console.log(req.body)
    const result = await createUserService(req.body);
    res.status(200).json({
      status: "success",
      message: "successfully create user",
    });
  } catch (error) {
    console.log(error)
    res.status(401).json({
      staus: "fail",
      message: "user not created",
      error: error.message,
    });
  }
};

exports.getUserController = async (req, res) => {
  try {
    const user = await getUserService(req.body);
    if (user.length === 0) {
      return res.status(404).json({
        status: "fail",
        messgae: "users not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "user successfully found",
      body: user,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      messgae: "users not found",
    });
  }
};

exports.getUserByIdController = async (req, res) => {
  try {
    const user = await getUserByIdService(req.params.email);
    if (user === null) {
      return res.status(404).json({
        status: "fail",
        messgae: "user not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "user successfully found",
      body: user,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      messgae: "user not found",
    });
  }
};

exports.userUpdateByIdController = async (req, res) => {
  try {
    const result = await userUpdatebyIdService(req.params.email, req.body);
    if (result.modifiedCount === 0) {
      return res.status(401).send({
        status: "fail",
        messgae: "user role not changed",
      });
    }
    res.status(200).json({
      status: "success",
      message: "user role successfully changed",
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      messgae: "user role not changed",
    });
  }
};
