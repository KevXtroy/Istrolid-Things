
var messageQueue = [];
function sendMessage(msg, channel) {
  messageQueue.push({text: msg, channel: channel ? channel : chat.channel});
}

function message(line) {
  var args = line.text.split(" ");
  var command = args[0].toLowerCase();
  
  switch(command) {
    case "bping":
      sendMessage("pong!");
    break;
    case "owoify":
      sendMessage(args[1].replace(\a\, "@"));
    break;
  }
}

var lastLine = {};
setInterval(()=>{
  var line = chat.lines[chat.lines.length - 1];
  if (line && lastLine !== line) {
    message(line);
    lastLine = line;
  }
}, 1);
setInterval(()=>{
  if (messageQueue[0]) {
    rootNet.send("message", messageQueue[0]);
    messageQueue.splice(0, 1);
  }
}, 100);
