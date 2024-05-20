const express = require("express")
const router = express.Router();
const authControllers = require("../controllers/auth-controller.js");
const {signupSchema,loginSchema} = require("../validators/auth-validator.js");
const validate = require("../middlewares/validate-middleware.js");
const authMiddlewate = require("../middlewares/auth-middleware.js");
const { upload, uploadToAzure} = require("../middlewares/user-middleware.js");

router.route("/").get(authControllers.home);

router.route("/register").post(
  upload.fields([
      { name: 'profilePic', maxCount: 1 },
      { name: 'idFile', maxCount: 1 }
  ]), uploadToAzure,
  validate(signupSchema),
  authControllers.register
);

router.route("/login").post(validate(loginSchema),authControllers.login);
router.route("/user").get(authMiddlewate,authControllers.user); 

module.exports = router;
