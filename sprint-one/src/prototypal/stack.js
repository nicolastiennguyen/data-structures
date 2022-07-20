var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.index = 0;
  return someInstance;
};

var stackMethods = {};
var storage = {};

stackMethods.push = function(value) {
  storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  if (this.index > 0) {
    this.index--;
  }
  return storage[this.index];
};

stackMethods.size = function() {
  return this.index;
};