var mqtt    = require('mqtt');
//var client  = mqtt.connect('mqtt://test.mosquitto.org');
var client  = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function () {
    client.subscribe('home/cam1/alert');
    client.publish('home/cam1/alert', 'Hello mqtt');
});

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    client.end();
});