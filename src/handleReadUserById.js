import urlParser from 'url';
import users from './users.js';

function handleReadUserById(req, res) {
    console.log(users);
    let { url } = req; 

    let { pathname } = urlParser.parse(url);
    let segments = pathname.slice(1).split('/');
    let userId = segments[1];
    console.log(`Extracted user id: ${userId}`);

    const user = users.find(u => u.id === parseInt(userId, 10));
    console.log(`Found user: ${user}`);

    if (user) {
        console.log(`Found user: ${user}`);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'User not found' }));
    }


}

export default handleReadUserById; 