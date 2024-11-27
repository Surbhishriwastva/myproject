import Contact from "../model/contact_model.js";

export const contactus = async (req, res) => {

    try {
        const { fullname, email, phoneno, message } = req.body;
        const contact = await Contact.findOne({ email })
        if (contact) {
            return res.status(400).json({ message: "Already response sent" })
        }
        const createdContact = new Contact({
            fullname,
            email,
            phoneno,
            message,
        })

        await createdContact.save()
        res.status(201).json({ message: "message send sucessfully" })



    } catch (error) {

        console.log("Error" + error.message)
        res.status(500).json({ message: "Internal sever error" })
    }
}