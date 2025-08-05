const express = require('express');
const router = express.Router();
const {signupValidate, loginValidate} = require('../Middlewares/LoginSignInValidation');
const {signup, login} = require('../Controllers/AuthController');





router.post('/signup', signupValidate,signup)
router.post('/login',loginValidate,login)

module.exports = router;
