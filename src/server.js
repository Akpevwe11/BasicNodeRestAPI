import http from 'http';
import urlParser from 'url';
import handleListUsers from './handleListUsers.js';
import handleReadUserById from './handleReadUserById.js';


let server = http.createServer((req, res) => {

    let {method, url} = req; 

    let { pathname } = urlParser.parse(url);
    
    if (method === 'GET' && pathname === '/users') {
        handleListUsers(req, res);
    } else if (method === 'GET' && pathname.startsWith('/users/') && 
    pathname.slice(1).split('/').length === 2
){

    //pathname.slice /users/1 will return users/1

    ///users?names="james"

    //  split('/') splits the resulting string into an array of strings ['users', '1']
    
    // length === 2 : checks if the resulting array has exactly two  elements. 
    // This ensure that the URL is in the format /users/:id

    handleReadUserById(req, res);

} else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
}

}); 

// Start the server
server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});