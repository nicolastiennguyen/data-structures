class Stack {
  constructor(storage, index) {
    this.storage = {};
    this.index = 0;
  }

  push(value) {
    this.storage[this.index] = value;
    this.index++;
  }

  pop() {
    if (this.index > 0) {
      this.index--;
    }
    return this.storage[this.index];
  }

  size() {
    return this.index;
  }
}