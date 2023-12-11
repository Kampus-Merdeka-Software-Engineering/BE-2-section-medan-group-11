import {Booking} from "../models/booking._model.js";

export const createBooking = async(req,res) => {
    try {
        console.log(req.body)
        await Booking.create(req.body);
        res.status(201).json({message: "Data Anda Sudah Kami Terima"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Terjadi kesalahan internal server" });
    }
}

export const getBooking = async(req,res) => {
    try{
        const bookings2 = await Booking.findAll();
        res.status(200).json(bookings2);
    }catch(error){
      console.log(error.message);
      res.status(500).json({ error: "Internal server error" });
    }
};