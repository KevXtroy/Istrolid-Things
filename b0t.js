
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
  } else if (line.text.startsWith("therxify")) {
    var output = line.text.slice(8).split(" ");
    if (line.text.startsWith("therxify^")) {
      var n = parseInt(command.slice(9), 10) > 0 ? parseInt(command.slice(9), 10) + 1 : 2;
      if (n < chat.lines.length)
        output = chat.lines[chat.lines.length - n].text.split(" ");
    }
    var keyboard = [
      "qwertyuiop",
      "asdfghjkl;",
      "zzxcvbnnmm"
    ];
    var splitSize = output.length > 5 ? Math.ceil(output.length / 3) : 6; //3 chunks max
    output = [output.slice(0, splitSize).join(" "), output.slice(splitSize, splitSize * 2).join(" "), output.slice(splitSize * 2, splitSize * 3 + 1).join(" ")];
    for (var i = 0; i < output.length; i ++) {
      for (var j = 0; j < output[i].length; j ++) {
        if (Math.random() < 0.1) {
          var letter = output[i][j];
          var index = -1;
          if (keyboard[0].includes(letter)) {
            index = 0;
          } else if (keyboard[1].includes(letter)) {
            index = 1;
          } else if (keyboard[2].includes(letter)) {
            index = 2;
          }
          if (index !== -1) {
            var position = [index + Math.floor(Math.random() * 3 - 1), keyboard[index].indexOf(letter) + Math.floor(Math.random() * 3 - 1)];
            if (keyboard[position[0]] !== undefined && keyboard[position[0]][position[1]] !== undefined) {
              output[i] = output[i].slice(0, j) + keyboard[position[0]][position[1]] + output[i].slice(j + 1);
            }
          }
        }
      }
      if ((output[i + 1] === "" || i === 2) && output[i] !== "")
        output[i] += " LOL";
      sendMessage(output[i]);
    }
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
