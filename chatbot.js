var bibleVerses = ["For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. – John 3:16", "The LORD is my shepherd, I shall not be in want. – Psalm 23", "You shall not steal. You shall not give false testimony against your neighbor. – Exodus 20:3", "I can do all things through Christ who strengthens me. – Philippians 4:13", "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. – Isaiah 40:31", "But seek first his kingdom and his righteousness, and all these things will be given to you as well. – Matthew 6:33", "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways acknowledge him, and he will make your paths straight. – Proverbs 3:5-6", "Delight yourself in the LORD and he will give you the desires of your heart. – Psalms 37:4", "This is the day the LORD has made; let us rejoice and be glad in it. – Psalms 118:24"];
setInterval(function() {
  if (chat.lines[chat.lines.length - 1].text.split(" ")[0] === "!verse") {
    rootNet.send("message", {text: bibleVerses[Math.round(Math.random() * (bibleVerses.length - 1))], channel: chat.channel});
    chat.lines.push({text: "", channel: chat.channel, color: [0, 0, 0, 255], name: "Bible", time: 1});
  }
  
  if (chat.lines[chat.lines.length - 1].text.split(" ")[0] === "f" && chat.lines[chat.lines.length - 2].text.split(" ")[0] === "f") {
    rootNet.send("message", {text: "f", channel: chat.channel});
    chat.lines.push({text: "", channel: chat.channel, color: [0, 0, 0, 255], name: "Bible", time: 1});
  }
}, 1000)
