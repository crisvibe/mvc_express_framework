const { getAllUsers } = require('../model/usersModel');

const renderAllUsers = async (req, res) => {
  const users = await getAllUsers();
  res.render('users', { users });
}

module.exports = { renderAllUsers };