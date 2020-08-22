const http = require('http');
const fs = require('fs');
let app = http.createServer(function(request, response) {
    let url = request.url;
    if(request.url == '/') {
        url = '/index.html';
    }
    if(request.url == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);