const app = require('express')();
const http = require('http').createServer(app);
var io = require('socket.io')(http);
const mongoose = require('mongoose');

//Connect to db
const connectionString = "mongodb+srv://alejoRios:alejoRios@realtime-database-s2ngs.mongodb.net/test";
//Schemas

//Services
app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
    
});
//listen
http.listen(3001, () => {
    console.log('listening on *:3001');
});
//functions

function sendrealtime() {
    io.emit('values', Math.round(Math.random()*1000)/10)
    io.emit('values2', Math.round(Math.random()*1000)/10)
}
sendrealtime()

setInterval(sendrealtime,2000)