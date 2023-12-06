import Booking from "../models/booking_model.js";

export const createBooking = async(req,res) => {
    try {
        await Booking.create(req.body);
        res.status(201).json({message: "Data Anda Sudah Kami Terima"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan internal server" });
    }
}