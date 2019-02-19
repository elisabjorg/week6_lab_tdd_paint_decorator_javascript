const Paint = function(liters) {
  this.liters = liters;
}

Paint.prototype.empty = function() {
  if (this.liters === 0){
    return true
  }
  else{
    return false
  }
};

Paint.prototype.usePaint = function() {
  this.liters -= 1
};

module.exports = Paint;
