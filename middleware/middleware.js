import UserModel from "../models/user.js";


export const isAdmin = async (req, res, next) => {
  try {
    const { createdBy } = req.body;

    const userInfo = await UserModel.findOne({ _id:createdBy });

    if (userInfo && userInfo.role === "Admin") {
      next(); 
    } else {
      res.status(403).json({
        message: "Access Denied, only Admin can access",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: console.log(error),
    });
  }
};


export const isTeacher = async (req, res, next) => {
  try {
    const { createdBy } = req.body;

    const userInfo = await UserModel.findOne({ _id:createdBy });

    if (userInfo && userInfo.role === "Teacher") {
      next(); 
    } else {
      res.status(403).json({
        message: "Access Denied, only Teachers can access this resource",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const isStudent = async (req, res, next) => {
  try {
    const { email } = req.body;

    const userInfo = await UserModel.findOne({ _id:createdBy });

    if (userInfo && userInfo.role === "Student") {
      next(); 
    } else {
      res.status(403).json({
        message: "Access Denied, only Students can access this resource",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const isAuthorized = (...allowedRoles) => {
  return async (req, res, next) => {
    try {
      const { email } = req.body;

      const userInfo = await UserModel.findOne({ email });

      if (userInfo && allowedRoles.includes(userInfo.role)) {
        next(); 
      } else {
        res.status(403).json({
          message: "Access Denied, unauthorized role",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };
};