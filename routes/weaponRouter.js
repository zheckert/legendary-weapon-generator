const express = require("express")
const weaponRouter = express.Router()
const Weapon = require("../models/weapon")

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