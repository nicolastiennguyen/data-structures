var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // I - item
  // O - none
  // C - none
  // E - none

  // Pseudocode:
  // assign value item at key item in set storage
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // I - item
  // O - boolean
  // C - none
  // E - none

  // Pseudocode:
  // get the value at key (item) in storage
  // if the value is undefined
    // return false
  // otherwise
    // return true

  var desiredValue = this._storage[item];
  if (desiredValue === undefined) {
    return false;
  } else {
    return true;
  }
};

setPrototype.remove = function(item) {
  // I - item
  // O - none
  // C - none
  // E - none

  // Pseudocode:
  // delete value at key in storage
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// All functions have constant time complexity O(1)
// hello