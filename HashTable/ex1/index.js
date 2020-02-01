const { HashTable } = require("../index");

function getIndicesOfItemWeights(weights, length, limit) {
  let ht = new HashTable(16);

  // subtract weight from limit
  // insert each weight into hash table
  // weight is key, remainder is value
  // can loop through with each other weight and see if given value
  // matches value of inserted remainder

  for (let i=0; i < length; i ++) {
    // let rem = weights[i] - limit;
    ht.insert(weights[i], i);
  }

  for (let j = 0; j < length; j++) {
    let target = ht.retrieve(limit - weights[j]);
    if (target) {
      let set = new Set();
      if (target.value > j) {
        return [target.value, j]
      } else {
        return [j, target.value]
      }
    } else {
      if (j === length - 1) {
        return null
      }
    }
  }
}

module.exports = { getIndicesOfItemWeights };

// let weights_1 = [9];
// let answer_1 = getIndicesOfItemWeights(weights_1, 1, 9);
// console.log(answer_1);

// let weights_3 = [4, 6, 10, 15, 16];
// let answer_3 = getIndicesOfItemWeights(weights_3, 5, 21);
// console.log(answer_3);
