const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const userAuth = require('../middleware/authUser');

router.post('/register',
    body('name').isLength({ min : 2}).withMessage('Name must be at Least 2 characters long '),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min : 5}).withMessage('Password must at least 5 characters long'),
    userController.register
)

router.post('/login',
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min : 5}).withMessage('Password must at least 5 characters long'),
    userController.login
)

router.get('/',
    userAuth.authenticateUser,
    userController.getUser
)

module.exports = router;