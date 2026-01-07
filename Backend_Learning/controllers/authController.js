const UserModel = require("../models/User")

exports.loginController = (request, response) => {
    try {
        const {email, password} = request.body; 
    response.json({email,password});   
    } catch (error) {
          response.json({error:error.message})  
    } 
}


exports.registerController = async (request, response) => {
   try {
    //  console.log(request.body, "request");
    
    const {email, password} = request.body;   
    const newCreatedUser = await UserModel.create({email, password})
    response.json({email,password, newCreatedUser}); 
   } catch (error) {
    response.json({error:error.message})
   } 
}