// Importing Express
const express = require('express');

// Importing the Controller Code
const controller = require('../controllers/controller');

// Initiating Express Router
const router = express.Router();

// Routes
router.get('/', controller.all_items);
router.get('/:id', controller.getItem, controller.fetch_item);
router.post('/', controller.add_item);
router.patch('/:id', controller.getItem, controller.update_item);
router.delete('/:id', controller.getItem, controller.delete_item);

module.exports = router;