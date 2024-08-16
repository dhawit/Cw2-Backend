const router = require("express").Router();
const userController = require("../controllers/userControllers");
const { authGuard } = require("../middleware/authGuard");

//sending the otp
router.post("/send-otp", userController.sendOTP);

//verifying otp and updating the password

router.post(
  "/verify-otp-and-update-password",
  userController.verifyOTPAndUpdatePassword
);

module.exports = router