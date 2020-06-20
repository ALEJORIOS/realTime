const app = require('express')();
const http = require('http').createServer(app);
var io = require('socket.io')(http);
const mongoose = require('mongoose');
var timeS = 0;
var timeM = 0;
var timeH = 0;

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
    var random1 = Math.round(Math.random()*1000)/10;
    var random2 = Math.round(Math.random()*1000)/10;
    var both = [random1, random2]
    io.emit('values', random1);
    io.emit('values2', random2);
    io.emit('both', both)
    io.emit('time', getTime());
}
function Zeros(i) {
    return i.toString().padStart(2,'0');
  }

function getTime() {
    timeS = timeS+2
    if (timeS >= 60) {
        timeM = timeM+1;
        timeS = timeS-60;
    }
    if (timeM >= 60){
        timeH = timeH+1;
        timeM = timeM-60;
    }

    return Zeros(timeH)+":"+Zeros(timeM)+":"+Zeros(timeS)
}
sendrealtime()

setInterval(sendrealtime,2000)