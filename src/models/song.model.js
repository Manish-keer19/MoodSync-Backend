const mongoose = require("mongoose")

const songSchema = mongoose.Schema({
    title:String,
    Artist:String,
    audio:String,
    mood:String,
})

const song = mongoose.model("song",songSchema)

module.exports = song