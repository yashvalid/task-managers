const express = require('express');
const { body } = require('express-validator');
const taskController = require('../controllers/tasks.controller');
const userAuth = require('../middleware/authUser')
const router = express.Router();

router.post('/',
    body('title').isLength({min : 3}).withMessage("Title should be at least 3 characters long"),
    body('description').notEmpty().withMessage("Description should not be empty"),
    body('priority').notEmpty().withMessage("Please select priority"),
    userAuth.authenticateUser,
    taskController.addTask
)

router.get('/',
    userAuth.authenticateUser,
    taskController.getAllTasks
)

router.get('/:id',
    userAuth.authenticateUser,
    taskController.getTask
)

router.delete('/:id',
    userAuth.authenticateUser,
    taskController.deleteTask
)

router.put('/:id',
    userAuth.authenticateUser,
    taskController.updateTask
)

module.exports = router;