var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  // use extend method to add shared functions

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
    // I - value
    // O - adds node to children array
    // C - none.
    // E - none.

    // Pseudocode:
    // Get the target node we want to add a child to
    // Get the children of the target node
    // this.children;
    // Create a node / tree with the input
    var childNode = Tree(value);
    // push the node onto the children of the target node array
    this.children.push(childNode);
};

treeMethods.contains = function(target) {
  // I - target (value)
  // O - boolean
  // C - none
  // E - empty tree

    // Pseudocode:
  // declare target node variable
  // var targetNode;
  // // check if there is a second parameter
  // if (arguments[1] !== undefined) {
  //   // target node is the second parameter
  //   targetNode = arguments[1];
  // } else {
  //   // if not, then target node is this
  //   // Get the target node / tree we want to search in
  //   targetNode = this;
  // }
  // check if the tree is empty
  // if (Object.keys(this).length === 0) {
  //   // return false
  //   return false;
  // }
  // var result = false;
  // if (arguments[1] !== undefined) {
  //   result = arguments[1];
  // }
  var result = false;
  if (arguments[1] === true) {
    return true;
  }

  // check if the value(target) is in the target node
  if (this.value === target) {
    // if it is
    // return true
    return true;
  } else {
    // if not
    // get the children
    // iterate through the children
    var children = this.children;
    for (var i = 0; i < children.length; i++) {
      // for each child, make the recursive call including child node as parameter
      //return this.children[i].contains(target, targetNode);
      result = children[i].contains(target, result);
      // children[i].contains(target);
    }
  }
  return result;

};

// var newTree = Tree(value);
// newTree.addChild(value);

/*
 * Complexity: What is the time complexity of the above functions?
 */

// .children: O(1) - constant number of operations to retrieve an array
// addChild: O(1) - adding a node to an array which is constant number of operations.
//                  Assumes we already have a reference to the node we want to add a child to.
// contains: O(n) - worst case scenario have to look at every node