const express = require("express")
const router = express.Router();
const authControllers = require("../controllers/auth-controller.js");
const signupSchema = require("../validators/auth-validator.js");
const validate = require("../middlewares/validate-middleware.js");
const authMiddlewate = require("../middlewares/auth-middleware.js");

router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema),authControllers.register);
router.route("/login").post(authControllers.login);
router.route("/user").get(authMiddlewate,authControllers.user);

module.exports = router;