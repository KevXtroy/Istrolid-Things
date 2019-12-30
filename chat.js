rootNet.send("message", {text: `${1+1+1+1}`, channel: chat.channel});

rootNet.send("message", {text: 'y e e e e e e e e e e e t'.replace(/e/g, 'e e e e e e e e e e e').replace(/e/g, 'e e e e e e e e e e e').replace(/e/g, 'e e e e e e e e e e e').replace(/e/g, 'e e e e e e e e e e e').replace(/e/g, 'e e e e e e e e e e e').replace(/e/g, 'e e e e e e e e e e e').replace(/e/g, 'e e e e e e e e e e e').replace(/e/g, 'e e e e e e e e e e e').replace(/e/g, 'e e e e e e e e e e e').replace(/e/g, 'e e e e e e e e e e e'), channel: chat.channel});


var yesno = true;
setInterval(() => {
 if (commander.side !== "spectators") {
  if (chat.lines[chat.lines.length - 1].text === "Game is about to start!" && chat.lines[chat.lines.length - 1].name === "Server" && yesno) {
   rootNet.send("message", {text: "glhf owo", channel: chat.channel});
   yesno = false;
  } else if ((chat.lines[chat.lines.length - 1].text === "alpha has won!" || chat.lines[chat.lines.length - 1].text === "beta has won!")  && chat.lines[chat.lines.length - 1].name === "Server" && !yesno) {
   rootNet.send("message", {text: "ggwp uwu", channel: chat.channel});
   yesno = true;
  }
 }
}, 100);
