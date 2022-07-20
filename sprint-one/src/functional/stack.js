var Stack = function() {
  var someInstance = {};
  var storage = {};
  var index = 0;

  someInstance.push = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    if (index > 0) {
      index--;
    }

    return storage[index];
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};