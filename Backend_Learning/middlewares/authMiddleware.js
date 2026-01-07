const UserModel = require("../models/User");
const jsonwebtoken = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const tokenVerificationObject = jsonwebtoken.verify(token, JWT_SECRET);
      console.log("tokenVerificationObject", tokenVerificationObject);
      next();
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  }
  if(!token){
    res.json({
        message:"No token present"
    })
  }
};
module.exports = authMiddleware;
