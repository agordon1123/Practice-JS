const { Queue } = require("../Queue");
const { Stack } = require("../Stack");

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    // recurse left
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else if (this.value <= value) {
    // recurse right
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
};
BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.value > value) {
    // recurse left
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else if (this.value < value) {
    // recurse right
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  } else {
    return false;
  }
};
BinarySearchTree.prototype.getMax = function() {
  if (this.right) {
    return this.right.getMax();
  } else {
    return this.value;
  }
};
BinarySearchTree.prototype.forEach = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.forEach(cb)
  }
  if (this.right) {
    this.right.forEach(cb)
  }
};
BinarySearchTree.prototype.inOrderPrint = function(node) {
  if (node.left) {
    this.inOrderPrint(node.left);
  }
  if (node.right) {
    console.log(node.value);
    this.inOrderPrint(node.right);
  }
  else {
    console.log(node.value);
    return
  }
};
BinarySearchTree.prototype.bftPrint = function(node) {
  q = new Queue();
  q.enqueue(node);
  while (q.size > 0) {
    current_node = q.dequeue();
    console.log(current_node.value);
    if (current_node.left) {
      q.enqueue(current_node.left)
    }
    if (current_node.right) {
      q.enqueue(current_node.right)
    }
  }
};
BinarySearchTree.prototype.dftPrint = function(node) {
  s = new Stack();
  s.push(node);
  while (s.size > 0) {
    current_node = s.pop();
    console.log(current_node.value);
    if (current_node.left) {
      s.push(current_node.left);
    }
    if (current_node.right) {
      s.push(current_node.right);
    }
  }
};

module.exports = { BinarySearchTree };
