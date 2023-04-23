const express = require('express')
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {registerUser , authUser} = require('../controllers/userControllers')


router.route("/").post(registerUser)
router.post("/login", authUser)





module.exports = router;