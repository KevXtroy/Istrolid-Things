
fetch("https://dailyverses.net/random-bible-verse")
.then(response => response.text())
.then(response => console.log(response.slice(response.indexOf('bibleVerse">') + 12, response.indexOf('<div class="bibleChapter"')).split("<br />").join("\n")))
.catch(err => console.log(err));
