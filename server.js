const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

//I'm not sure if I want to move all the randomizer attributes into the database. Maybe I should? For now they stay where they are.

//make it auth friendly- have the tool available to all, just generating stuff. Also have a user-specific page with saved names or something?

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/weapondb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to database")
    )
    
    

app.use("/weapon", require("./routes/weaponRouter"))

app.use((error, req, res, next) => {
    console.log(error)
    return res.send({errorMessage: error.message})
})

app.listen(9001, () => {
    console.log("The server is running on Port 9001")
})