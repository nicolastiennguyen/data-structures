class Queue {
  constructor(storage, index) {
    this.storage = {};
    this.index = 0;
  }

  enqueue(value) {
    this.storage[this.index] = value;
    this.index++;
  }

  dequeue() {
    if (this.index > 0) {
      this.index--;
    }
    var temp = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage[this.index];
    return temp;
  }

  size() {
    return this.index;
  }
}
