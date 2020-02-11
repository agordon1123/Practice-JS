const { Queue } = require("../../Structures");

function Graph() {
  this.vertices = {};
}

Graph.prototype.addVertex = function(vertex) {
  if (!this.vertices[vertex]) {
    this.vertices[vertex] = new Set();
  } else {
    return null;
  }
};

Graph.prototype.addEdge = function(v1, v2) {

}

function earliestAncestor(ancestors, startingNode) {
  const graph = {}
  const queue = new Queue();

  // load into hash table
  for (let i = 0; i < ancestors.length; i ++) {
    if (!graph[ancestors[i][1]]) {
      // create new array and push
      graph[ancestors[i][1]] = new Array();
      graph[ancestors[i][1]].push(ancestors[i][0]);
    } else {
      // push to existing array
      graph[ancestors[i][1]].push(ancestors[i][0]);
    }
  }

  queue.enqueue(startingNode);
  let oldest = 0;

  while (queue.len() > 0) {
    let x = queue.dequeue();

    if (graph[x]) {
      let neighbor;
      for (neighbor of graph[x]) {
        queue.enqueue(neighbor);
      }
    } else {
      oldest = x;
    }
  }

  if (oldest !== 0 && oldest !== startingNode) {
    return oldest
  } else {
    return -1
  }

}
module.exports = { earliestAncestor };

const test_ancestors = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [8, 9],
  [11, 8],
  [10, 1]
];

// console.log(earliestAncestor(test_ancestors, 6));
// console.log(earliestAncestor(test_ancestors, 2));
// console.log(earliestAncestor(test_ancestors, 3));
// console.log(earliestAncestor(test_ancestors, 4));
// console.log(earliestAncestor(test_ancestors, 6));
// console.log(earliestAncestor(test_ancestors, 6));
// console.log(earliestAncestor(test_ancestors, 7));
// console.log(earliestAncestor(test_ancestors, 8));
// console.log(earliestAncestor(test_ancestors, 9));
// console.log(earliestAncestor(test_ancestors, 10));
// console.log(earliestAncestor(test_ancestors, 11));
