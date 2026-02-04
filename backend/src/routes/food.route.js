const foodController = require("../controllers/food.controller.js")
const authMiddleware = require("../middlewares/auth.middleware.js")
const express = require('express');
const router = express.Router();
const multer = require('multer');


const upload = multer({
    storage: multer.memoryStorage(),
})

// only foodpartner can add food item normal user cannot

router.post("/", authMiddleware.authFoodPartnerMiddleware, upload.single("foodvideo"), foodController.createFood)


module.exports = router


