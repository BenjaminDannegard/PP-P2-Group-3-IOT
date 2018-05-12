
//sends an email via IFTT / used when testing as you only get limited texts
function sendText() {
  var req = new XMLHttpRequest();
  req.open("GET", "https://maker.ifttt.com/trigger/button_pressed/with/key/2WO8ujKTlMTiK9nEmPB2h", true);
  req.send();
  console.log("email is sent");
}

/* sends a text via IfTT

function sendText() {
  var req = new XMLHttpRequest();
  req.open("GET", "https://maker.ifttt.com/trigger/send_text/with/key/2WO8ujKTlMTiK9nEmPB2h", true);
  req.send();
  console.log("text is sent");
}*/

function sendLight() {
 board.on("ready", function() {

  var led = new five.Led(13);

  // "blink" the led in 500ms on-off phase periods
  led.blink(3000);
  console.log("led blinking");
});
}
