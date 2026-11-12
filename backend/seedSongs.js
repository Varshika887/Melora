const mongoose = require("mongoose");
const Song = require("./models/Song");

mongoose.connect("mongodb+srv://Varshika:%40Sivavarshika08@cluster0.2wqotpe.mongodb.net/melora?retryWrites=true&w=majority")
    .then(async () => {
        console.log("MongoDB connected");

        const songs = [
            {
                title: "Telugu Melody",
                artist: "Melora Artist",
                language: "Telugu",
                genre: "Melody",
                mood: "Romantic",
                album: "Melora Originals",
                cover: "assets/Images/melora-logo.png",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            },
            {
                title: "Hindi Vibes",
                artist: "Melora Artist",
                language: "Hindi",
                genre: "Pop",
                mood: "Happy",
                album: "Melora Originals",
                cover: "assets/Images/melora-logo.png",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
            },
            {
                title: "Tamil Chill",
                artist: "Melora Artist",
                language: "Tamil",
                genre: "Chill",
                mood: "Relaxed",
                album: "Melora Originals",
                cover: "assets/Images/melora-logo.png",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
            },
            {
                title: "English Energy",
                artist: "Melora Artist",
                language: "English",
                genre: "Pop",
                mood: "Energetic",
                album: "Melora Originals",
                cover: "assets/Images/melora-logo.png",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
            }
        ];

        await Song.deleteMany({});
        await Song.insertMany(songs);

        console.log("Songs added successfully");
        mongoose.connection.close();
    })
    .catch(error => {
        console.log("Error:", error);
    });