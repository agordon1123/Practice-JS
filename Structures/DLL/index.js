function ListNode(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

ListNode.prototype.insertAfter = function(value) {
  const newNode = new ListNode(value);
  if (this.next) {
    this.next.prev = newNode;
    this.next = newNode;
  } else {
    this.next = newNode;
  }
};

ListNode.prototype.insertBefore = function(value) {
  const newNode = new ListNode(value);
  if (this.prev) {
    this.prev.next = newNode;
    this.prev = newNode;
  } else {
    this.prev = newNode;
  }
};

ListNode.prototype.delete = function() {
  if (this.next) {
    this.next.prev = this.prev;
  }
  if (this.prev) {
    this.prev.next = this.next;
  }
};

function Dll(node = null) {
  this.head = node;
  this.tail = node;
  this.size = node === null ? 0 : 1;
}
Dll.prototype.len = function() {
  return this.size;
};
Dll.prototype.removeFromHead = function() {
  let value = this.head.value;
  this.delete(this.head);
  return value;
};
Dll.prototype.addToTail = function(value) {
  new_node = new ListNode(value);
  if (this.tail === null) {
    this.head = new_node;
    this.tail = new_node;
    this.size += 1;
  } else {
    // copy = this.tail;
    new_node.prev = this.tail;
    this.tail.next = new_node;
    this.tail = new_node;
    // this.tail.prev = copy;
    this.size += 1;
  }
};
Dll.prototype.addToHead = function(value) {
  new_node = new ListNode(value);
  if (this.head === null) {
    this.head = new_node;
    this.tail = new_node;
    this.size += 1;
  } else {
    new_node.next = this.head;
    this.head.prev = new_node;
    this.head = new_node;
    this.size += 1;
  }
};
Dll.prototype.removeFromTail = function() {
  value = this.tail.value;
  this.delete(this.tail);
  return value;
};
Dll.prototype.moveToFront = function(node) {
  if (node === this.head) {
    return 
  } else {
    value = node.value;
    this.delete(node);
    this.addToHead(value);
  }
};
Dll.prototype.moveToEnd = function(node) {
  if (node === this.tail) {
    return 
  } else {
    value = node.value;
    this.delete(node);
    this.addToTail(value);
  }
};
Dll.prototype.delete = function(node) {
  if (!this.head && !this.tail) {
    return
  }
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else if (this.head === node) {
    this.head = node.next;
    node.delete()
  } else if (this.tail === node) {
    this.tail = node.prev;
    node.delete()
  } else {
    node.delete()
  }
  this.size -= 1;
};
Dll.prototype.getMax = function() {
  largest = this.head.value;
  target = this.head;
  while (target) {
    if (target.value > largest) {
      largest = target.value;
    }
    target = target.next;
  }
  return largest;
};

module.exports = {
  ListNode,
  Dll
};
