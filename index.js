import  express  from "express";
import booking_route from "./route/booking_route.js";
import cors from "cors";

const app = express();
const port = 3000;
app.use(express.json());
app.use(booking_route);
app.use(cors());
app.listen(port, () => {
    console.log('Example app listening on http://localhost:${port}');
});