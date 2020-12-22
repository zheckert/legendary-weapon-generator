const express = require("express")
const weaponRouter = express.Router()
const Weapon = require("../client/models/weapon")

weaponRouter.get("/", (req, res, next) => {
    Weapon.find((error, weapons) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(200).send(weapons)
    })
})

weaponRouter.post("/", (req, res, next) => {
    const newWeapon

    //TODO: Come up with better shorthand, lwg is so freaking confusing and doesn't pluralize well. You need to find a better one. maybe just weapon? it's boring but we'll know what it is maybe.
})

weaponRouter.delete()