
function getVerse() {
  var output = "Error :(";
  fetch("https://dailyverses.net/random-bible-verse")
   .then(response => response.text())
   .then(response => rootNet.send("message", {text: response.slice(response.indexOf('bibleVerse">') + 12, response.indexOf('<div class="bibleChapter"')).split("<br />").join("\n"), channel: chat.channel}))
   .catch(err => console.log(err));
}
