require('dotenv').config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require("express-jwt")
const path = require("path")

const port = process.env.PORT || 9001

//I'm not sure if I want to move all the randomizer attributes into the database. Maybe I should? For now they stay where they are.

app.use(express.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "client", "build")))

// mongoose.connect("mongodb://localhost:27017/weaponsdb",

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true },
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to database")
    )

app.use("/auth", require("./routes/authRouter"))
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use("/api/weapon", require("./routes/weaponRouter"))

app.use((error, request, response, next) => {
    console.log(error)
    if(error.name === "UnauthorizedError"){
        response.status(error.status)
    }
    return response.send({errorMessage: error.message})
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`The server is running on ${port}`)
})