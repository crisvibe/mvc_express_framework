// ---- What dependencies does the controller need? ----

// ---- controller connects to the model ----
// Controller is requested by router
const { getAllUsers, createUser, deleteUser } = require('../model/usersModel');

const renderAllUsers = (req, res) => {
  const allUsers = getAllUsers();
  res.render('users', {allUsers});
}

const renderUser = (req, res) => {
  const allUsers = getAllUsers();
  const userId = req.params.id;
  // console.log(userId);
  const user = allUsers[userId];
  // console.log(user);
  res.render('users', {user})
}

const registerUser = (req, res) => {
  const name = req.body.name;
  createUser(name);
}

const removeUser = (req, res) => {
  const userId = req.params.id;
  deleteUser(userId);
  res.redirect('/users');
}

module.exports = { renderAllUsers, renderUser, registerUser, removeUser };