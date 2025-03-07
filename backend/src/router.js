const express = require('express');
const tasksController = require('backend\src\controllers\taskscontroller.js');

const router = express.Router(); 

router.get('/tasks', tasksController.getAll); 

module.exports = router;

