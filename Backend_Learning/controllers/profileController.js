const UserModel = require("../models/User");

exports.profileController = async (request, response) => {
    try {
        const UserData = await UserModel.find();
        console.log("UserData", UserData);
        response.json({UserData});
    } catch (error) {
        response.json({error:error.message});
    }
}