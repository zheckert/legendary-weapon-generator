require('dotenv').config()

const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const { expressjwt: expressJwt } = require('express-jwt');
const path = require("path")
const port = process.env.PORT || 9001

app.use(express.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to the database"))
    .catch(error => console.error("Error connecting to the database:", error));
    
app.use("/auth", require("./routes/authRouter"))
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }).unless({ path: ['/auth/login', '/auth/signup'] }));
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