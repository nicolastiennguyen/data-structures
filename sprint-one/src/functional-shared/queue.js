// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Queue = function() {
  var someInstance = {};
  someInstance.index = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};
var storage = {};

queueMethods.enqueue = function(value) {
  storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  if (this.index > 0) {
    this.index--;
  }
  var temp = storage[0];
  delete storage[0];
  for (var key in storage) {
    storage[key - 1] = storage[key];
  }
  delete storage[this.index];
  return temp;
};

queueMethods.size = function() {
  return this.index;
};