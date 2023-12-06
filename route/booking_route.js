import express from "express";
import { 
    createBooking
} from "../controller/booking_con.js";

const router = express.Router();

router.post('/booking_route',createBooking);

export default router;