import express from "express";
import { 
    createBooking,
    getBooking
} from "../controller/booking_con.js";

const router = express.Router();

router.get('/bookings',getBooking);
router.post('/booking',createBooking);

export default router;