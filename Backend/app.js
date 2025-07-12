const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const mapsRoutes = require("./routes/maps.routes");
 const rideRoutes = require("./routes/ride.routes");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/maps", mapsRoutes);
app.use("/rides", rideRoutes);  

app.get("/", function (req, res) {
  res.send("donee..");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
