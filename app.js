const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');

// Middleware for JSON
app.use(express.json());
// app.use(express.urlencoded());

// Set the Template Engine EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

// Set up routing with users
app.use('/users', usersRoutes);

app.listen(3030);

const router = express.Router();