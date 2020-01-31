const { Dll } = require("../../index");

function RingBuffer(capacity) {
  this.capacity = capacity;
  this.current = null;
  this.storage = new Dll();
}

RingBuffer.prototype.append = function (item) {
  console.log(item);
  if (this.current === null) {
    // first item
    // add and set as current
    this.storage.addToHead(item);
    this.current = this.storage.head;

  } else if (this.storage.len() === this.capacity) {
    let current = this.current;

    if (current === this.storage.head) {
      console.log("head")
      // remove from head
      this.storage.removeFromHead();
      // insert into head
      this.storage.addToHead(item);
      // move current pointer to next node
      this.current = current.next;
    } else if (current === this.storage.tail) {
      console.log("tail");
      // remove from tail
      this.storage.removeFromTail();
      // insert into tail
      this.storage.addToTail(item);
      // move current pointer back to first node
      this.current = this.head;
    } else {
      console.log("else");
      // capture next current
      let copy = {...this.current};
      // overwrite current with new value
      this.storage.delete(this.current);
      // (* issue is here *)
      copy.next.insertBefore(item);
      this.storage.size += 1;
      // move current pointer to next node
      this.current = copy.next;
    }

  } else {
    console.log("not full");
    // not full, add to tail
    this.storage.addToTail(item);
  }
};

RingBuffer.prototype.get = function () {
  let list = [];
  let current_node = this.storage.head;
  while (current_node) {
    list.push(current_node.value);
    current_node = current_node.next;
  }
  console.log(list);
  return list;
};

module.exports = { RingBuffer };
