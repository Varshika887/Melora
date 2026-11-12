require("dotenv").config();


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/songs");
const likeRoutes = require("./routes/likes");
const app = express();

const PORT = process.env.PORT || 5000;


/* MIDDLEWARE */

app.use(cors({
    origin: [
        "https://melora-backend-red.vercel.app", 
        "http://localhost:3000",                
        "http://127.0.0.1:3000"
    ],
    credentials: true
}));

app.use(express.json());


/* DATABASE */

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Atlas connected successfully");
    })
    
    .catch((error) => {

        console.log("MongoDB connection error:", error);
    
    });

    
/* ROUTES */

app.get("/test", (req, res) => {
    res.json({ message: "Test route works" });
});

app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/likes", likeRoutes);

/* HOME */

app.get("/", (req, res) => {

    res.json({
        message: "Welcome to Melora Backend 🎵"
    });

});


/* SERVER */

app.listen(PORT, () => {

    console.log(
        `Melora server running on http://localhost:${PORT}`
    );

});