const express = require("express")
const weaponRouter = express.Router()
const Weapon = require("../models/weapon")

//below route may be a legacy route. Delete when prudent
weaponRouter.get("/", (req, res, next) => {
    Weapon.find((error, weapons) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(200).send(weapons)
    })
})
//get all user weapons
weaponRouter.get("/user", (request, response, next) => {
    Weapon.find({ user: request.user._id })
        .populate("user", "username")
        .exec((error, userWeapons) => {
            if(error){
                response.status(500)
                return next(error)
            }
            return response.status(200).send(userWeapons)
        })
})

weaponRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newWeapon = new Weapon(req.body)
    newWeapon.save((error, savedWeapon) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(201).send(savedWeapon)
    })
})

weaponRouter.delete("/:weaponId", (req, res, next) => {
    Weapon.findOneAndDelete(
        { _id: req.params.weaponId },
        (error, deletedWeapon) => {
            if(error){
                res.status(500)
                return next(weapon)
            }
            return res.status(201).send(`"${deletedWeapon.name}" removed.`)
        }
    )
})



module.exports = weaponRouter