function Node(value = null, nextNode = null) {
  this.value = value;
  this.nextNode = nextNode;
}

Node.prototype.getValue = function() {
  return this.value;
};

Node.prototype.getNext = function() {
  return this.nextNode;
};

Node.prototype.setNext = function(node) {
  this.nextNode = node;
};

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.addToHead = function(value) {
  let node = new Node(value);
  if (this.head !== null) {
    node.setNext(this.head);
  }
  this.head = node;
};

LinkedList.prototype.contains = function(value) {
  if (this.head === null) {
    return false;
  }
  let current = this.head;
  while (current) {
    if (current.getValue() === value) {
      return true;
    }
    current = current.getNext();
  }
  return false;
};

LinkedList.prototype.reverseList = function() {
  // FILL THIS IN
  let current = this.head;
  while (current) {
    this.addToHead(current.value);
    current = current.nextNode;
  }
};

LinkedList.prototype.print = function() {
  let list = [];
  let current = this.head;
  while (current) {
    list.push(current.value);
    current = current.getNext();
  }
  return list;
};

module.exports = { LinkedList };
