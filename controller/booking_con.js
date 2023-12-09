import {Booking} from "../models/booking._model.js";

export const createBooking = async(req,res) => {
    try {
        await Booking.create(req.body);
        res.status(201).json({message: "Data Anda Sudah Kami Terima"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan internal server" });
    }
}

export const getBooking = async(req,res) => {
    try{
        const bookings = await Booking.findAll();
        res.status(200).json(bookings);
    }catch(error){
      console.log(error.message);
      res.status(500).json({ error: "Internal server error" });
    }
};