// Welcome to the webiste.com/users
// In MVC, routes act as the glue between URLs and controllers.
const express = require('express');
const router = express.Router();
const { renderAllUsers } = require('../controller/usersController');

console.log(renderAllUsers);

// GET method. Get users
router.get('/', renderAllUsers);

// POST method. Create user

module.exports = router;