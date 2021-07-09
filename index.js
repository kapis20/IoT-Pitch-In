const ttn = require('ttn');
const moment = require('moment');
const config = require('./config.js');
const mqtt = require('mqtt');

const appID = config.TTNOptions.appID;
const accessKey = config.TTNOptions.accessKey;

function Decoder(bytes) {
    if(bytes.length == 1) {
        if(bytes[0] == 1) {
            return {
                'button': 'activated'
            }
        } else {
            return {
                'error': 'button action unknown'
            }
        }
    } else if(bytes.length == 4) {
        var humidity = (bytes[0]<<8) | bytes[1];
        var temperature = (bytes[2]<<8) | bytes[3];
        return {
            'humidity': humidity/ 100,
            'temperature': temperature/100
        }
    } else {
        return {
            'error': 'payload unknown'
        }
    }
}

let application_id = config.TTNOptions.appID;

let device_id = 'arduino-test'
let topic_base = `v3/${application_id}@ttn/devices/${device_id}`
options = {
    username: '0004a30b001c2043',
    password: 'NNSXS.HX7HAOTHQESCAMKN7QZ2Y4TL76RZZ4PW37VLAVI.QKFUJPNKAJ62OE46TAUDMLYHEI5Y6FTGMYHEDPC6QTVJVMKDIBZA'
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

ttn.data(appID, accessKey)
    .then(function (client) {
        client.on("uplink", async function (devID, payload) {
            console.log("Received uplink from ", devID);
            console.log(payload);

            const gateways = payload.metadata.gateways;
            for (i=0; i<gateways.length; i++){
                console.log(gateways[i]);
            }

            console.log("payload_raw decodded = ",Decoder(payload.payload_raw));

        })
    })
    .catch(function (error) {
        console.error("Error", error)
        process.exit(1);
    })