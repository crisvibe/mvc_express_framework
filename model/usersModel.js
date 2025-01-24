const fs = require('fs');
const path = require('path');
const { user } = require('pg/lib/defaults');

const usersFilePath = path.join(__dirname, '../data/users.json');

const getAllUsers = () => {
  const js_users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
  return js_users;
}

const createUser = (name) => {
  const id = Date.now().toString();
  const js_users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
  js_users[id] = name;
  const json_users = JSON.stringify(js_users, null, 2);
  fs.writeFileSync(usersFilePath, json_users, 'utf8');
  console.log(`New user added: ${name} - ${id}`);
}

const deleteUser = (userId) => {
  console.log(userId);
  const js_users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
  delete js_users[userId];
  const json_users = JSON.stringify(js_users, null, 2);
  fs.writeFileSync(usersFilePath, json_users, 'utf8');
  console.log(`User ${userId} removed`);
}

module.exports = { getAllUsers, createUser, deleteUser };