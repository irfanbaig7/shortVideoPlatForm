const foodPartnerModel = require('../models/foodpartner.model.js')
const userModel = require('../models/user.model')

const jwt = require("jsonwebtoken");

async function authFoodPartnerMiddleware(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const foodPartner = await foodPartnerModel.findById(decoded.id);

        if (!foodPartner) {
            return res.status(403).json({
                message: "Access denied. Food partner only."
            })
        }

        req.foodPartner = foodPartner

        next()

    } catch (err) {

        return res.status(401).json({
            message: "Invalid token"
        })

    }

}


async function authUserMiddleware(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "u cann't get all videos Please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(403).json({
                message: "Access denied. User only."
            })
        }

        req.user = user

        next()

    } catch (err) {

        return res.status(401).json({
            message: "Invalid token from getall videos"
        })

    }

}



module.exports = {
    authFoodPartnerMiddleware,
    authUserMiddleware,
}
