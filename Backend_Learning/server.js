const express = require("express"); 

const dbConnection = require("./config/dbConnection")
const dotenv = require("dotenv");
// const { loginController, registerController } = require("./controllers/authController");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
const userRoutes = require("./routes/userRoute");
const profileRoute = require("./routes/profileRoute");
dbConnection();

app.use(express.json());            // for JSON bodies
app.use(express.urlencoded({ extended: true })); // for form data

app.get('/', (request, response) => response.json({success: "my message"}));
// app.post('/login', loginController);
// app.post('/register', registerController);
app.use('/', userRoutes);
app.use('/', profileRoute);

app.listen(PORT, ()=>console.log("app running on localhost", PORT));