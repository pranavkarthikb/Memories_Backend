const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/memory-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/memories", router); // localhost:5000/memories

mongoose
  .connect("mongodb+srv://pranavkarthikb:pranav123@cluster0.s6l6h4l.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
