var BinarySearchTree = function(value) {
  // prototypal
  var obj = Object.create(BinarySearchTreePrototype);
  // .left property
  obj.left = {};
  // .right property
  obj.right = {};
  // .value property
  obj.value = value;
  return obj;
};

var BinarySearchTreePrototype = {};

// Functions

// .insert

BinarySearchTreePrototype.insert = function(value) {
// I - value
// O - none
// C - none
// E - assume all values are numbers

// Pseudocode:
// if second parameter is not undefined
// set binary search tree as second parameter
// if binary search tree equals value
  // do nothing
// else if binary search tree value is less than value
    // if left binary search tree is empty object
    // set left binary search tree with value
    // else
    // recursive call of insert with left binary search tree
// else
    // if right binary search tree is empty object
    // set right binary search tree with value
    // else
    // recursive call of insert with right binary search tree

  // if (arguments[1] !== undefined) {
  //   this = arguments[1];
  // }
  // if (this.value === value) {
  // }

  if (typeof value === 'number') {
    if (this.value > value) {
      if (Object.keys(this.left).length === 0) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (this.value < value) {
      if (Object.keys(this.right).length === 0) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// .contains

BinarySearchTreePrototype.contains = function(value) {
  // I - value
  // O - boolean
  // C - none
  // E - undefined binary search tree

  // Pseudocode:
  // check if binary search tree value is equivalent to value
  // if it is
    // return true
  // otherwise
    // if binary search tree value is less than value
      // recursive call on this.right
    // if binary search tree value is greater than value
      // recursive call on this.left
  // return false

  if (typeof value !== 'number') {
    return false;
  }

  if (this.value === value) {
    return true;
  }
  if (this.value < value) {
    if (Object.keys(this.right).length === 0) {
      return false;
    }
    return this.right.contains(value);
  }
  if (this.value > value) {
    if (Object.keys(this.left).length === 0) {
      return false;
    }
    return this.left.contains(value);
  }
  return false;
}

// .depthFirstLog

BinarySearchTreePrototype.depthFirstLog = function(cb) {
  // I - function
  // O - none
  // C - none
  // E - this.right and/or this.left are empty objects

  // Pseudocode:
  // run callback function on this.value
  // run recursive function on this.right
  // run recursive function on this.left

  cb(this.value);
  if (Object.keys(this.left).length !== 0) {
    this.left.depthFirstLog(cb);
  }
  if (Object.keys(this.right).length !== 0) {
    this.right.depthFirstLog(cb);
  }

}

/*
 * Complexity: What is the time complexity of the above functions?
 */

// .insert: O(log(n))
// ,contains: O(log(n))
// .depthFirstLog: O(n)