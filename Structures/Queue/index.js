function Queue() {
  this.size = 0;
  this.storage = [];
}

Queue.prototype.len = function() {
  return this.size;
};
Queue.prototype.enqueue = function(value) {
  this.storage.push(value);
  this.size += 1
};
Queue.prototype.dequeue = function() {
  if (this.size === 0) {
    return null
  } else {
    x = this.storage.shift();
    this.size -= 1
    return x;
  }
};

module.exports = { Queue };
