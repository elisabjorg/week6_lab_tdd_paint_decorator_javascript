const Room = function(squareMeters, painted) {
  this.squareMeters = squareMeters;
  this.painted = painted;
}

Room.prototype.paint = function() {
  this.painted = true
};

module.exports = Room;
