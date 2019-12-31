
var messageQueue = [];
function sendMessage(msg, channel) {
  messageQueue.push({text: msg, channel: channel ? channel : chat.channel});
}

function message(line) {
  var args = line.text.split(" ");
  var command = args[0].toLowerCase();
  
  if (command === "bping") {
    sendMessage(line.name + " pong!");
  } else if (line.text.startsWith("owoify")) {
    var output = (line.name + ": " + line.text.slice(6)).split(" ");
    if (line.text.startsWith("owoify^")) {
      var n = parseInt(command.slice(7), 10) > 0 ? parseInt(command.slice(7), 10) + 1 : 2;
      if (n < chat.lines.length)
        output = (chat.lines[chat.lines.length - n].name + ": " + chat.lines[chat.lines.length - n].text).split(" ");
    }
    for (var i in output) {
      for (var j = 0; j < output[i].length; j ++) {
        if (j > 0 && "aeiou".indexOf(output[i][j]) !== -1 && output[i][j - 1].toLowerCase() !== "w") {
          output[i] = output[i].slice(0, j) + "w" + output[i].slice(j);
          break;
        }
      }
      if (Math.random() < 0.05) {
        output[i] += " OwO ";
      } else if (Math.random() < 0.1) {
        output[i] += " ~nuzzles~ ";
      }
    }
    sendMessage(output.join(" "));
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
}, 200);
