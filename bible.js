
function getVerse() {
  fetch("https://dailyverses.net/random-bible-verse")
   .then(response => response.text())
   .then(response => rootNet.send("message", {text: response.slice(response.indexOf('bibleVerse">') + 12, response.indexOf('<div class="bibleChapter"')).split("<br />").join("\n"), channel: chat.channel}))
   .catch(err => console.log(err));
}
function checkSwearWord(s) {
  var swearWords = ["nig", "ass", "fuck", "jew", "gay", "homo", "fag", "bitch", "shit", "cock", "dick", "puss"];
  for (var word of swearWords) {
    if (s.toLowerCase().indexOf(word) !== -1) return true;
  }
  return false;
}
setInterval(() => {
  var line = chat.lines[chat.lines.length - 1];
  if (!line) return;
  //commands
  if (line.text === "!verse")
    getVerse();
  if (line.text.startsWith("!rate")) {
    var arg = line.text.split(" ")[1];
    if (arg === "1") {
      rootNet.send("message", {text: "ok boomer", channel: chat.channel});
    } else if (arg === "2") {
      rootNet.send("message", {text: "why not like :(", channel: chat.channel});
    } else if (arg === "3") {
      rootNet.send("message", {text: "okay", channel: chat.channel});
    } else if (arg === "4") {
      rootNet.send("message", {text: "you can also rate 5 btw", channel: chat.channel});
    } else if (arg === "5") {
      rootNet.send("message", {text: "happy bot", channel: chat.channel});
    } else {
      rootNet.send("message", {text: line.name + ", bruh choose a number between 1 - 5", channel: chat.channel});
    }
  }
    
  //swear word check >:C
  if (checkSwearWord(line.text)) {
    var suffix = ["did you just say a bad word in the house of God?", "hey! You can't say that here!", "this is a christian game, please watch your profanity.", "I heard a bad word, repent for your sins."];
    rootNet.send("message", {text: line.name + ", " + suffix[Math.floor(Math.random() * suffix.length)], channel: chat.channel});
  }
  chat.lines.push({text: "", name: ""});
}, 100);
