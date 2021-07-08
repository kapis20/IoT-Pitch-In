# IoT-Pitch-In

Purpose: 
This Arduino code uses various sensors and LCD, to transmit and receive data from the ttn (The Things Stack). The received data is used to control LEDs. I will also show the technique to control the angular movement of the servo. Similar principles can be applied to any Arduino board with different sensors mounted. 

Additionally, Arduino was put into sleep mode and save some power. During the project, humidity, temperature and distance were send to ttn.

# Components and connections 
### Components 
-The things Uno: The Arduino Leonardo board with built in Microchip Lorawan module. (Arduino Uno or any other board with appropiate shield could be also used).
 Here is a shield that can be used with European frequency (compatible with most of the Arduino boards) - https://www.thethingsnetwork.org/marketplace/product/iot-lora-node-shield
-DHT 11- Humidity and Temperature Sensor 
- LCD1602 Module
- Ultrasonic Sensor - HC-SRO4
- 2 x LEDs 
- 3x push buttons 
-2x 10kOhm and 2x 220Ohm resistors  
- Passive Buzzer 
![Untitled design (5)](https://user-images.githubusercontent.com/87130809/124958099-af986c80-e011-11eb-87d8-a554cd1b261c.png)

### Connection

![image](https://user-images.githubusercontent.com/87130809/124958309-ef5f5400-e011-11eb-9cbb-cefd6337bfba.png)

![image](https://user-images.githubusercontent.com/87130809/124958568-364d4980-e012-11eb-8cc0-d804d58711a5.png)

# Code 
### Libraries used: 
```
<LiquidCrystal.h> - for LCD screen 
<avr/sleep.h> -  library contains the methods that controls the sleep modes
<DHT.h>
<DHT_U.h> - for Temp and Hum sensor 
<TheThingsNetwork.h> - to connect to Lora Network 
```
### Connecting to The Things Stack 
```
#define loraSerial Serial1
#define debugSerial Serial
// Replace REPLACE_ME with TTN_FP_EU868 or TTN_FP_US915
#define freqPlan TTN_FP_EU868

TheThingsNetwork ttn(loraSerial, debugSerial, freqPlan);
ttn.join(appEui, appKey);
```
In this [tutorial](https://www.thethingsnetwork.org/docs/devices/node/quick-start/) the way of registering the end node to The Things Network (although, it's not supported anymore). The method is the same for The things Stack 







