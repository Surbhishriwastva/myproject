import Travel from "../model/travel_model.js";

export const getTravel = async (req, res) => {
    try {
        const travel = await Travel.find()
        res.status(200).json(travel)
    } catch (error) {
        console.log("error", error)
        res.status(500).json(error)
    }
}