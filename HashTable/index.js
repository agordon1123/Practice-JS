// Linked List hash table key/value pair
function LinkedPair(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
}

function HashTable(capacity) {
  this.capacity = capacity;
  this.storage = new Array(capacity).fill(null);
}

HashTable.prototype.hash = function(key) {
  // hash key
  // insert into this.storage at filtered key, value is original key

  let hashed_key = this.hashMOD(key);
  return hashed_key;
};

HashTable.prototype.hashMOD = function(key) {
  // hash the string according to ascii keys
  // modulo by capacity to keep within storage range

  let total = 0;
  for (let i=0; i < key.length; i++) {
    let key_ascii = key.charCodeAt(i);
    total += key_ascii;
  }
  return total % this.capacity;
};

HashTable.prototype.insert = function(key, value) {
  // Store the value with the given key.
  // Hash collisions should be handled with Linked List Chaining.

  let hashed_key = this.hash(key);

  if (this.storage[hashed_key] === null) {
    // create new node
    this.storage[hashed_key] = new LinkedPair(key, value);
  }
  let node = this.storage[hashed_key]
  while (node) {
    if (node.key === key) {
      // handle overwrite
      node.value = value
      return;
    } else if (node.next === null) {
      // create new node
      node.next = new LinkedPair(key, value);
      return;
    } else {
      // iterate
      let copy = {...node};
      node = copy.next;
    }
  }
};
HashTable.prototype.remove = function(key) {
  // Remove the value stored with the given key.
  //     Print a warning if the key is not found.

  let hashed_key = this.hash(key);

  if (!this.storage[hashed_key]) {
    return null
  } else {
    prev = null;
    node = this.storage[hashed_key];

    while (node) {
      if (node.key === key) {
        // handle delete
        if (prev) {
          prev.next = node.next;
          return
        } else {
          // first node
         this.storage[hashed_key] = node.next;
         return 
        }
      } else {
        // iterate
        prev = node;
        node = node.next;
      }
    }
    return null
  }
};
HashTable.prototype.retrieve = function(key) {
  // Retrieve the value stored with the given key.
  // Returns None if the key is not found.
  // Fill this in.

  let hashed_key = this.hash(key);

  if (!this.storage[hashed_key]) {
    // node not found
    return null;
  } else {
    let target = this.storage[hashed_key];
    while (target) {
      if (target.key === key) {
        // node is found
        return target;
      } else {
        // iterate
        let copy = {...target};
        target = copy.next;
      }
    }
    // node not found
    return null;
  }
};
HashTable.prototype.resize = function() {
  // Doubles the capacity of the hash table and
  //     rehash all key/value pairs.
  //     Fill this in.

  let copy = this.storage;
  this.capacity = this.capacity * 2;
  this.storage = new Array(this.capacity).fill(null);

  for (let i=0; i < copy.length; i++) {
    while (copy[i]) {
      this.insert(copy[i].key, copy[i].value)
      // iterate
      copy[i] = copy[i].next
    }
  }
};

// let ht = new HashTable(8);

// ht.insert("key-0", "val-0");
// ht.insert("key-1", "val-1");
// ht.insert("key-2", "val-2");
// ht.insert("key-3", "val-3");
// ht.insert("key-4", "val-4");
// ht.insert("key-5", "val-5");
// ht.insert("key-6", "val-6");
// ht.insert("key-7", "val-7");
// ht.insert("key-8", "val-8");
// ht.insert("key-9", "val-9");



// ht.insert("key-0", "new-val-0");
// ht.insert("key-1", "new-val-1");
// ht.insert("key-2", "new-val-2");
// ht.insert("key-3", "new-val-3");
// ht.insert("key-4", "new-val-4");
// ht.insert("key-5", "new-val-5");
// ht.insert("key-6", "new-val-6");
// ht.insert("key-7", "new-val-7");
// ht.insert("key-8", "new-val-8");
// ht.insert("key-9", "new-val-9");

// console.log(ht.retrieve("key-0"));

// console.log(ht.retrieve("key-1"));

// console.log(ht.retrieve("key-2"));

// console.log(ht.retrieve("key-3"));

// console.log(ht.retrieve("key-4"));

// console.log(ht.retrieve("key-5"));

// console.log(ht.retrieve("key-6"));

// console.log(ht.retrieve("key-7"));

// console.log(ht.retrieve("key-8"));

// console.log(ht.retrieve("key-9"));

module.exports = { HashTable };
