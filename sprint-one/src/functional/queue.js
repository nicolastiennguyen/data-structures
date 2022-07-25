var Queue = function() {
  var someInstance = {};
  var storage = {};
  var index = 0;

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    if (index > 0) {
      index--;
    }

    var temp = storage[0];
    delete storage[0];

    for (var key in storage) {
      storage[key - 1] = storage[key];
    }

    delete storage[index];
    return temp;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};