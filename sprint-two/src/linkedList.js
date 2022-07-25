var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // I - value (can be object or primitive)
    // O - LinkedListNode instance added to tail of LinkedList
    // C - none
    // E - tail can be null or non null

    // Pseudocode:

    // create a new LinkedList node with input value
    var node = Node(value);

    // if tail is null
    if (list.tail === null) {
      // assign created node to head property
      list.head = node;
      // assign created node to tail property
      list.tail = node;
    } else {
      // get the current tail, a Linked List node, from the LinkedList
      // var currentTail = list.tail;
      var currentTail = Node(list.tail.value);
      // assign the newly created node to the current tail's next value
      currentTail.next = node;
      // assign current tail to head's next value
      // list.head.next = currentTail; // screwed it all up
      list.head = currentTail;
      // assign the newly created node as the current tail
      list.tail = node;
    }
  };

  list.removeHead = function() {
    // I - none
    // O - return value of head property and remove current head
    // C - none
    // E - if head is null

    // Pseudocode:
    // if head is null
    if (list.head === null) {
      // return null
      return null;
    }
    // declare a variable and initialize it with the value property from the current head
    var currentHeadValue = list.head.value;
    // declare a variable newHead and store the current head's next property
    var newHead = list.head.next;
    // var newHead = Node(list.head.next.value);
    // set current head to newHead
    list.head = newHead;
    // return value property from original head
    return currentHeadValue;
  };

  list.contains = function(target) {
    // I - target (value)
    // O - boolean
    // C -
    // E - empty linked list

    // Pseudocode:
    // if linked list is empty
    if (Object.keys(list).length === 0) {
      // return false
      return false;
      // otherwise:
    } else {
      // traverse the linked list starting with head and ending with tail
      // create a variable to store the current node in the linked list
      // set current node variable to head {value: 5, next: {}}
      var currentNode = list.head;
      // while [current node] is not null:
      while (currentNode !== null) {
        // check if value of the current node is equal to the target
        if (currentNode.value === target) {
          // return true
          return true;
        }
        // reassign current node to the next node
        currentNode = currentNode.next;
      }
      // return false
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addToTail: O(1) - constant number of operations regardless of the size of the Linked List
// removeHead: O(1) - constant number of operations regardless of the size of the Linked List
// contains: O(n) - iterates through n elements of the Linked List