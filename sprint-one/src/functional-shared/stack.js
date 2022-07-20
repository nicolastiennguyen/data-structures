// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Stack = function() {
  var someInstance = {};
  someInstance.index = 0;
  _.extend(someInstance, stackMethods);
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

// use this in methods
// use _.extend to copy methods onto the instance