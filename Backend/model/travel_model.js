import mongoose from "mongoose";
const travelSchema = mongoose.Schema({
    name: String,
    Price: Number,
    category: String,
    image: String,
    title: String,
})
const Travel = mongoose.model("Travel", travelSchema)

export default Travel;