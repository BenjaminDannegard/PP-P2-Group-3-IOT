# websockets skeleton

This is a skeleton websocket example. It consists of a "server" script (app.js) that runs in the Node.js environment, and typical "client" code in the public/ folder.

The example shows how to send a message from a client and have this distributed to every other client connected to the same server.

A hosted version of this is on [Glitch for you to fork and modify](https://glitch.com/edit/#!/ch-websockets-skeleton)

# Setup 

In the directory you've got this sample:

`$ npm install`

This will install the necessary packages from npm.

# Running

Once set up, you can boot up your server with

`$ npm start`

It will continue running. To stop it again, press CTRL+C (PC) or CMD+C (Mac).

# Uses

* [reconnecting-websocket](https://github.com/pladaria/reconnecting-websocket) wrapper (v3.2.2)

# Read more

* [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
* [express-ws](https://www.npmjs.com/package/express-ws)


Scenario: User walks into a room he/she never visited before. When the users mobile phone is connected to the same Wifi as the Chromecast for the first time their phone start vibrating in and pattern that matches a light coming from the Chromecast.

You need: 
Websockets (see above)
Johnny-Five 
Arduino IDE
IFTT
Arduino board set up with LED

How its made: Button is pressed and a text is sent to users phone at the same time as the arduino starts blinking. The vibration on the phone is set manualy on a IPhone to match the pattern of light.

Johnny-five Set Up

Install Johnny-five

$ npm install johnny-five

read more about johnny-five here http://johnny-five.io


Arduino Set Up

Download and install Arduino IDE 

http://www.arduino.cc/en/main/softwar

Connect your Arduino to your computer with the USB Cable, and fire up the Arduino IDE.
Install Firmata so that the board can accept JS code
Tools -> select your board/port
File -> examples -> firmata -> standard firmata -> install to arduino 
Upload sketch to Arduino

Set up your Arduino with LED to pin 13


