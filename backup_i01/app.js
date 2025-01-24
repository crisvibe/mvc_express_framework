const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');

// Use Middleware to handle JSON
app.use(express.json());
app.use(express.urlencoded());

// Set template engine with ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// Import routes

// Use routes
// Why do we call the routes from the app?
// The app itself is the operator.
// Moves the user to the website.com/users directory with all it's funcitonality
app.use('/users', usersRoutes);
app.get('/', (req, res) => {
  res.render('index', {})
})

app.listen(3030);