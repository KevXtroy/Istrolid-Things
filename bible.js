
function getVerse() {
  var output = "Error :(";
  fetch("https://dailyverses.net/random-bible-verse")
   .then(response => response.text())
   .then(response => rootNet.send("message", {text: response.slice(response.indexOf('bibleVerse">') + 12, response.indexOf('<div class="bibleChapter"')).split("<br />").join("\n"), channel: chat.channel}))
   .catch(err => console.log(err));
}
function checkSwearWord(s) {
  var swearWords = ["nig", "ass", "fuck", "jew", "gay", "homo", "fag", "bitch", "shit", "cock", "dick", "puss"];
  for (var word in swearWords) {
    if (s.replace(/ /).replace(/./).toLowerCase().indexOf(word) !== -1) return true;
  }
  return false;
}
setInterval(() => {
  var line = chat.lines[chat.lines.length - 1];
  if (!line) return;
  //commands
  if (line.text === "!verse")
    getVerse();
  //swear word check >:C
  if (checkSwearWord(line.text)) {
    var suffix = ["did you just say a bad word in the house of God?", "hey! You can't say that here!", "this is a christian game, please watch your profanity.", "I heard a bad word, repent for your sins."];
    rootNet.send("message", {text: line.name + ", " + suffix[Math.floor(Math.random() * suffix.length)], channel: chat.channel});
  }
  chat.lines.push({text: "", name: ""});
}, 100);
