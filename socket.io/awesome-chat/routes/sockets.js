// var io = require('socket.io');
//
// exports.initialize = function(server) {
//   io = io.listen(server);
//   io.sockets.on("connection", function(socket){
//     socket.on('message', function(message){
//       message= JSON.parse(message);
//       if(message.type == "userMessage"){
//         // socket.get('nickname', function(err, nickname){
//           message.username=socket.nickname;
//           socket.broadcast.send(JSON.stringify(message));
//           message.type = "myMessage";
//           socket.send(JSON.stringify(message));
//         // });
//       }
//     });
//     socket.on("set_name", function(data){
//         socket.nickname = data.name
//         socket.emit('name_set', data);
//         socket.send(JSON.stringify({type:'serverMessage',
//             message: 'Welcome to the most interesting chat room on earth!'}));
//         socket.broadcast.emit('user_entered', data);  //广播有用户进来了
//     });
//   });
// }


var io = require('socket.io');

exports.initialize = function (server) {
  io = io.listen(server);
  var self = this
  var user = {nickname:""}

  this.chatInfra = io.of("/chat_infra");
  this.chatInfra.on("connection", function (socket) {
      socket.on("set_name", function (data) {
        user.nickname = data.name,
        socket.emit('name_set', data);
        socket.send(JSON.stringify({type:'serverMessage',
            message:'Welcome to the most interesting ' +
            'chat room on earth!'}));
        socket.broadcast.emit('user_entered', data);
      });
      socket.on("join_room", function (room) {
        nickname = user.nickname
        socket.join(room.name);
        var comSocket = self.chatCom.sockets[socket.id];
        comSocket.join(room.name);
        comSocket.room = room.name;
        socket.in(room.name).broadcast
    .emit('user_entered', {'name':nickname});

    });
});


  this.chatCom = io.of("/chat_com");
    this.chatCom.on("connection", function (socket) {
        socket.on('message', function (message) {
          message = JSON.parse(message);
          if (message.type == "userMessage") {
              console.log(socket.nickname)
              console.log(".....");
              message.username = user.nickname;
              socket.in(socket.room).broadcast.send(JSON.stringify(message));
              socket.broadcast.send(JSON.stringify(message));
              message.type = "myMessage";
              socket.send(JSON.stringify(message));
          }
        });
      });
}
