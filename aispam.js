drawAI = function(name) {
    return div(".hover-white", function() {
      var w;
      display("inline-block");
      w = ((window.innerWidth / 4) - 25) / 2;
      width(w);
      padding(5);
      margin(3);
      text(name);
      return onclick(function() {
        var aiBuildBar, aiName, col, fleetAis, i, row;
        aiBuildBar = false;
        fleetAis = commander.fleet.ais || {};
        for (row in fleetAis) {
          aiName = fleetAis[row];
          if (name === aiName) {
            aiBuildBar = [];
            for (col = i = 0; i < 10; col = ++i) {
              aiBuildBar.push(commander.fleet[row + "," + col]);
            }
            console.log("ai player from name", aiName, aiBuildBar);
          }
        }
        if (!aiBuildBar) {
          aiBuildBar = ais.all[name];
        }
        if (aiBuildBar) {
          network.send("addAi", name, ui.pickingLobbyAiSide, aiBuildBar);
        }
        return ui.pickingLobbyAiSide = false;
      });
    });
  };
