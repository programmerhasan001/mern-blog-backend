const { signup } = require('../../controllers/authControllers/singup');

const signUpRoute = require('express').Router();

signUpRoute.post('/', signup)

module.exports = signUpRoute;