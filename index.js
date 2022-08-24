// run `node index.js` in the terminal

const http = require('http');
const path = require('path');
const fs = require('fs');

server = http.createServer((req, res) => {
  const Pathname = req.url;
  if (Pathname === '/home') {
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(content);
      }
    );
  } else if (Pathname === '/api/data') {
    const Profile = [
      {
        name: 'Ramesh',
        stream: 'CSE',
      },
      {
        name: 'shanmukh',
        stream: 'ece',
      },
    ];
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(Profile));
  }
});

server.listen(5000, '127.0.0.1', () => {
  console.log('server is running');
});
