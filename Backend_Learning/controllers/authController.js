const UserModel = require("../models/User")
const bcrypt = require("bcrypt"); 
const jsonwebtoken = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET
exports.loginController = async (request, response) => {
    try {
        const {email, password} = request.body; 
        const userFound = await UserModel.findOne({email})
        console.log("userFound", userFound);
        
        const token = jsonwebtoken.sign({id:userFound._id}, JWT_SECRET)
    if (!userFound) {
       return response.status(400).json({
            success: false, 
            message: "User not exist please register first"
        })
    }
    response.json({email, password, token});   
    } catch (error) {
          response.json({error:error.message})  
    } 
}


exports.registerController = async (request, response) => {
   try {
    //  console.log(request.body, "request");
    const {email, password} = request.body; 
    const userFound = await UserModel.findOne({email}); 
    if (userFound) {
        return response.status(400).json({
            message: "User already exists"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);  
    const newCreatedUser = await UserModel.create({email, password : hashedPassword})
    response.json({email, newCreatedUser}); 
   } catch (error) {
    response.json({error:error.message})
   } 
}