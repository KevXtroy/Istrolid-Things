
function getVerse() {
  var output = "Error :(";
  fetch("https://dailyverses.net/random-bible-verse")
   .then(response => response.text())
   .then(response => rootNet.send("message", {text: response.slice(response.indexOf('bibleVerse">') + 12, response.indexOf('<div class="bibleChapter"')).split("<br />").join("\n"), channel: chat.channel}))
   .catch(err => console.log(err));
}
setInterval(() => {
  var line = chat.lines[chat.lines.length - 1];
  if (line.text.toLowerCase() === "!verse")
    getVerse();
  chat.lines.push({});
}, 100);
