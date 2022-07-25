

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // I - key, value
  // O - none
  // C - none
  // E - if there is already a value at a given index

  // naive implementation: set v as value at index in the hash table
  // var setFunction = limitedArray.set;
  // this.storage.setFunction(index, v);
  // this._storage.set(index, v);

  // Pseudocode:
  // get value at index
  var value = this._storage.get(index);
  // create new boolean
  var alreadyExists = false;
  // if value is undefined
  if (value === undefined) {
    // set it as a tuple with k and v at index
    this._storage.set(index, [[k,v]]);
  // otherwise
  } else {
    // if k is HashTable do this:
    for (let i = 0; i < value.length; i++) {
      // if the first element in any tuple is equal to k
      let tupleKey = value[i][0];
      if (tupleKey === k) {
          // change the second element in the tuple
          value[i][1] = v;
          alreadyExists = true;
      }
    }
    if (alreadyExists === false) {
      value.push([k, v]);
    }
    // otherwise:
      // push tuple k and v to the array
      // value.push([k,v]);
    // use set method to set array at index
    this._storage.set(index, value);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // I - key
  // O - value
  // C - none
  // E - if there is more than one value at the given index

  // // Pseudocode:
  // // use .get method on limited array storage to obtain value at index
  // var value = this._storage.get(index);
  // // return value
  // return value;

  // Pseudocode:
  // use .get method on limited array storage to obtain array at index (array of tuples)
  var tuples = this._storage.get(index);
  // for each element in the array of tuples
  for (var i = 0; i < tuples.length; i++) {
    // get the tuple in the element
    // check if first element in the tuple is equal to k
    if (tuples[i][0] === k) {
      // if so
      // return second element in the tuple
      return tuples[i][1];
    }
  }
 };

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // I - key
  // O - none
  // C - none
  // E - if there is more than one value at the given index

  // Pseudocode:
  // use .get method on limited array storage to obtain value at index and delete it
  // this._storage.set(index, undefined);

  // Pseudocode:
  // Get the array of tuples at index (has of key k)
  var value = this._storage.get(index);
  // create a new array
  var newValue = [];
    // find the tuple we want to remove by:
    // iterate through array of tuples at index
  for (let i = 0; i < value.length; i++) {
    var tuple = value[i];
    // check if first element in the tuple is not equal to key
    if (tuple[0] !== k) {
      // push tuple into newValue array
      newValue.push(tuple);
    }
  }
  // Set new array at index
  this._storage.set(index, newValue);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// insert: usually O(1), but worse case scenario is O(n) because of collisions (hash function returns index already in use, so then key value stored in same bucket of hash table)
// retrieve: O(1)
// remove: O(1)