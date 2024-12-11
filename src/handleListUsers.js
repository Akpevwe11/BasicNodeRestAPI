
import users from './users.js';

function handleListUsers(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(users));
}

export default handleListUsers;