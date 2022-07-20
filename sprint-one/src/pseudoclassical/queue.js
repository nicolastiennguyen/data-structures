var Queue = function() {
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  if (this.index > 0) {
    this.index--;
  }
  var temp = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  delete this.storage[this.index];
  return temp;
};

Queue.prototype.size = function() {
  return this.index;
};




