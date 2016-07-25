// var app = require('express').createServer();
// var io = require('socket.io')(app);
//
//
// app.listen(80);
//
// app.get('/', function(req, res) {
//     res.sendfile(__dirname + '/index.html')
// })
//
// io.on('connection', function(socket) {
//     socket.emit('news', {hello: 'world'});
//     socket.on('my other evern', function(data) {
//         console.log(data)
//     })
// })

var app = require('http');
app.createServer(function(request, respone) {
    respone.writeHead(200, {"Content-Type": "text/html"});
    respone.write("<html>");
    respone.write("<head><title>Node.js JS</title></head>")
    respone.write("<body>Hello Web</body>");
    respone.write("</html>");
    respone.end();
}).listen(9999)
