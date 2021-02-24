class Graph {
  constructor() {
    this.vertices = 0;
    this.adjacentList = {};
  }

  addVertex(vertex) {
    this.adjacentList[vertex] = [];
    this.vertices++;
  }

  addEdge(vertex1, vertex2) {
    // undirected graph

    // edge connections go both ways
    this.adjacentList[vertex1].push(vertex2);
    this.adjacentList[vertex2].push(vertex1);
  }
}

module.exports = Graph;
