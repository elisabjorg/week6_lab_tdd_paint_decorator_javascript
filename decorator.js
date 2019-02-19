const Paint = require('./paint.js');
const Room = require('./room.js');


const paint1 = new Paint(5);
const paint2 = new Paint(3);
const paint3 = new Paint(2);

const paintPots = [paint1, paint2, paint3];

const room = new Room(10);

const Decorator = function(paintStock) {
  this.paintStock = paintStock;
}

Decorator.prototype.addPaintToStock = function() {
  for(i = 0; i < paintPots.length; i++){
  this.paintStock += 1
};

Decorator.prototype.calculateLiters = function() {
  let paintPot;
  let totalLiters = 0;
  for(i =0; i < paintPots.length; i++){
  paintPot = paintPots[i];
  totalLiters += paintPot.liters;
  }
  return totalLiters;
};

};


module.exports = Decorator;
