const mongoose = require("mongoose");

const dbConnection =async () => {
try {
    const dbObject = await mongoose.connect("mongodb://localhost:27017/GuidanceDB");
    console.log(dbObject.connection.host);
    
} catch (error) {
    console.log(error.message);
}
}
module.exports = dbConnection;
