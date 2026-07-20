const express = require("express")
const movieModel = require("./models/movie.post")
const cors = require("cors")
const Booking = require("./models/booking.model");

const app = express();
app.use(express.json())
app.use(cors())

app.post('/movies', async (req, res) => {
    const data = req.body;

    const movie = await movieModel.create(data)

    res.status(201).json({
        message: "Movie add successfully",
        movie
    })
})

app.get("/movies", async (req, res) => {
    const movie = await movieModel.find()

    return res.status(201).json({
        message: "Movie fetched Successfully",
        movie
    })
})

app.post("/book-ticket", async (req, res) => {
    try {
        const booking = await Booking.create(req.body);

        res.json({
            success: true,
            booking,
        });
    } catch (err) {
        res.json({
            success: false,
            message: err.message,
        });
    }
});


module.exports = app;