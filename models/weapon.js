const mongoose = require("mongoose")
const Schema = mongoose.Schema

const weaponSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Weapon", weaponSchema)