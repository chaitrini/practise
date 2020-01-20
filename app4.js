var events = require('events');
var EventEmitter = new events.EventEmitter();
var ringbell = function(){
    console.log("ring ring ring");
}
var message = function(){
    console.log("welcome");
}
EventEmitter.on('doorOpen',ringbell);
EventEmitter.on('bellrings',message);
EventEmitter.emit('doorOpen');
EventEmitter.emit('bellrings');
