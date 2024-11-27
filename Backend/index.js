import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import travelRoute from "./route/travel_route.js";

import userRoute from "./route/user_route.js";
import ContactRoute from "./route/contact_route.js"



const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}



// // Define route
app.use("/travel", travelRoute);
app.use("/user", userRoute);
app.use("/contact", ContactRoute)



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});