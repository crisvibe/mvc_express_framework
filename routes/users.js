// ---- Users connects to the Controller. Handle HTTP Methords and 
// Exports to the App.js

// This is where we handle all HTTP Method requests
const express = require('express');
const router = express.Router();
const { renderAllUsers, renderUser, registerUser, removeUser } = require('../controller/usersController');

// GET All Users
router.get('/', renderAllUsers);

// GET Specific User
router.get('/:id', renderUser);

// POST Create User
router.post('/register', registerUser);

// POST Delete User
router.get('/delete/:id', removeUser);

module.exports = router;