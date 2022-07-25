

// Instantiate a new graph
var Graph = function() {

  // Add nodes and edges inside of Graph

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // I - node
  // O - node added to Graph (none)
  // C - none.
  // E - add node that already exists, is undefined, or null

  // Pseudocode:
  // create a key value pair in the graph
  // key = node
  // value = empty array (edges)

  // Note: do [] works with this or only . notation?
  if (this[node] === undefined) {
    this[node] = [];
  }


};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // I - node
  // O - boolean
  // C - none.
  // E - none.

  // Pseudocode:
  // get the edges from node in the graph
  // if edges is undefined
    // return false
  // otherwise
    // return true

  var edges = this[node];
  if (edges === undefined) {
    return false;
  } else {
    return true;
  }

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // I - node
  // O - none
  // C - none
  // E - node doesn't exist in the graph

  // Pseudocode:
  // get the edges for the node
  var edges = this[node];
  // if edges is not undefined
  if (edges !== undefined) {
    // iterate through the nodes in the edges array
    for (var i = 0; i < edges.length; i++) {
      // for each node
      var edgeNode = edges[i];
      // get the edges array
      var nodeEdges = this[edgeNode];
      // create an empty array
      var newArray = [];
      // iterate through the edges array
      for (var j = 0; j < nodeEdges.length; j++) {
        // if the edge is not the node
        if (nodeEdges[j] !== node) {
          // add it to the empty array
          newArray.push(nodeEdges[j]);
        }
      }
    // set the edges array equal to the new array (line 66)
    this[edgeNode] = newArray;
  }
  // delete the node in the graph
  delete this[node];
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // I - fromNode, toNode
  // O - none.
  // C - none
  // E - if one or both nodes do not exist, no edge added

  // Pseudocode:
  // Get the edges from the fromNode
  // Add the toNode into the fromNode edges
  this[fromNode].push(toNode);
  // Get the edges of the toNode
  // Add the fromNode to the toNode edges
  this[toNode].push(fromNode);


};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // I - fromNode, toNode
  // O - boolean
  // C - none
  // E - one or both nodes do not exist

  // Pseudocode:
  // Get fromNode's edges
  // if toNode in fromNode's edges:
    // return true
  // return false
  if (this[fromNode].includes(toNode)) {
    return true;
  }
  return false;

};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // I - fromNode, toNode
  // O - none.
  // C - none.
  // E - one or both nodes do not exist

  // Pseudocode:
  // Get fromNode's edges
  // Check if toNode present in fromNode's edges
  if (this[fromNode].includes(toNode)) {
  // if yes:
    // remove toNode from fromNode's edges
    // remove fromNode from toNode's edges
    this[fromNode] = this[fromNode].filter(elem => elem !== toNode);
    this[toNode] = this[toNode].filter(elem => elem !== fromNode);
  }


};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // I - cb, callback function
  // O - none
  // C - none.
  // E - invalid function

  // Pseudocode:
  // should use .call, .apply, and/or .bind etc.
  // iterate through graph's nodes
  var nodes = Object.keys(this);
  for (let i = 0; i < nodes.length; i++) {
    // for each node, invoke the callback function
    var node = nodes[i];
    cb(node);
  }


};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addNode: O(1)
// contains: O(1) - graph is represented as an object so you can use a key lookup to get the node
// removeNode: O(n) - number of edges removed is potentially equal to the number of nodes in the graph
// addEdge: O(1) - edges is an array on each node. adding a new element to an array is constant time.
// hasEdge: O(2n) = 2O(n) = O(n) - must iterate through each edge array, until desired edge is found
// removeEdge: O(n) - must iterate through each array, until desired edge to be removed is found
// forEachNode: O(n^2) - worst case is you have to iterate through all edges for every node