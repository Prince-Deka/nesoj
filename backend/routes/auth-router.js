const express = require("express")
const router = express.Router();
const authControllers = require("../controllers/auth-controller.js");
const {signupSchema,loginSchema} = require("../validators/auth-validator.js");
const validate = require("../middlewares/validate-middleware.js");
const authMiddleware = require("../middlewares/auth-middleware.js");
const { getUserData } = require("../controllers/user-controller");
const { upload, uploadFilesToAzure } = require("../middlewares/user-middleware.js");

router.route("/").get(authControllers.home);
router.route("/register")
  .post(
    upload.fields([{ name: 'profilePic', maxCount: 1 }, { name: 'idFile', maxCount: 1 }]),
    uploadFilesToAzure,
    validate(signupSchema),
    authControllers.register
  ); 
router.route("/login").post(validate(loginSchema),authControllers.login);
router.route("/user").get(authMiddleware,getUserData); 

module.exports = router;

