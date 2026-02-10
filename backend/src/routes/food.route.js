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

router.get("/", authMiddleware.authUserMiddleware, foodController.getFoodItems)

router.post('/like',
    authMiddleware.authUserMiddleware,
    foodController.likeFood)


router.post('/save',
    authMiddleware.authUserMiddleware,
    foodController.saveFood
)


router.get('/save',
    authMiddleware.authUserMiddleware,
    foodController.getSaveFood
)


module.exports = router


