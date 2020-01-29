function Stack(capacity=10) {
  this.size = 0;
  this.storage = [];
}

Stack.prototype.len = function() {
  return this.size
};
Stack.prototype.push = function(value) {
  this.storage.push(value)
  this.size += 1
};
Stack.prototype.pop = function() {
  if (this.size > 0) {
    x = this.storage.pop()
    this.size -= 1
    return x
  } else {
    return null
  }
};

module.exports = { Stack };
