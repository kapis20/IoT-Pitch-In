

let mqtt = require('mqtt');
//const moment =require('moment');

let config = require('./config.js');

//let application_id = '0004a30b001c2043';
//const appID = config.TTNOptions.appID;
//const accessKey = config.TTNOptions.accessKey;
let application_id = config.TTNOptions.appID;

let device_id = 'arduino-test'
let topic_base = `v3/${application_id}@ttn/devices/${device_id}`
options = {
    username: '0004a30b001c2043',
    password: 'NNSXS.WLWN5EQ4CCID3ZVAXJKWCOBLCFTOJACJHD7OVUY.A2QKRNRHC5UZJOUJ5BZKMDOSVKT3JZ6KF4RSALJEZKXBGA7A6HLA'
}



let client = mqtt.connect('mqtt://eu1.cloud.thethings.network:1883', options)
client.on("error",function(error){ console.log("Can't connect"+error)}); //function decleared inside 
client.subscribe(`${topic_base}/up`, (err, message) => {   // need to be subscibed to a topic before receivin any messages, connection to end device?
    if (err) {
        console.log(`Failed to subscribe to topic: ${err}`);
    } else {
        console.log(`Subscribed to topic ${topic_base}/up`);
    }
})

client.on('message', (topic, message, packet) => {   //listener - includes message 
   console.log(`Received Message: \nTOPIC: ${topic}\nMESSAGE: ${message}`);
    console.log("message is "+ message);
  //  console.log(message.toString())
	//console.log("topic is "+ topic);
    
})





