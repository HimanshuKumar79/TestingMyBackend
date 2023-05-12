const express = require("express");
const app = express();
const connectDB = require("./config/ConnectDB");
const Todoroutes = require("./routes/route");
app.use(express.json());
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT || 4000;
connectDB();
app.use("/api/v1", Todoroutes);
app.listen(PORT, () => {
  console.log("Server listening on port->", process.env.PORT);
});
