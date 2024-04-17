require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/db.confg.js");
const userRouter = require("./route/userRoute.js");

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(cookieParser());

app.use("/", userRouter);

// db init
connectToDb();

module.exports = app;
