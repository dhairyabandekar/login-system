const dns = require("node:dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);


require("dotenv").config();
const express = require('express');
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");


const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("🚀 Login System Backend is Running Successfully");
});

app.use("/api/auth", authRoutes);


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});