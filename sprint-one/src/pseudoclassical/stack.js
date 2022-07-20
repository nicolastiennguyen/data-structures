var Stack = function() {
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  if (this.index > 0) {
    this.index--;
  }
  return this.storage[this.index];
};

Stack.prototype.size = function() {
  return this.index;
};