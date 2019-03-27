function rainbowIcon() {
  this.r = 255;
  this.g = 0;
  this.b = 0;
};
rainbowIcon.prototype.run = function() {
  if (this.r > 0 && this.b == 0) {
    this.r --;
    this.g ++;
  }if (this.g > 0 && this.r == 0) {
    this.g --;
    this.b ++;
  }if (this.b > 0 && this.g == 0) {
    this.r ++;
    this.b --;
  }
};
rainbowIcon.prototype.update = function() {
  commander.color = [this.r, this.g, this.b, 255];
  account.simpleCommander();
  //account.color = [this.r, this.g, this.b, 255];
  account.rootSave();
  network.sendPlayer();
};
var _rainbowIcon = new rainbowIcon();
setInterval(function() {
  _rainbowIcon.run();
}, 1);
setInterval(function() {
  _rainbowIcon.update();
}, 500);
