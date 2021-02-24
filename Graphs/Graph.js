class Graph {
  constructor() {
    this.vertices = 0;
    this.adjacentList = {};
  }

  addVertex(vertex) {
    this.adjacentList[vertex] = [];
    this.vertices++;
  }
}

module.exports = Graph;
