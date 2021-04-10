/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-10 22:01:05
 * @LastEditTime: 2021-04-10 22:28:53
 * @FilePath: \algorithm\classic\min-span-tree.js
 * @Description: Min Span Tree is solved by Prim and Kruskal
 */
class Edge {
    constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}

function prim(matirx) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    const res = [];
    const selectedVertext = [0];

    for (let i = 0; i < rows; i++) {
        
    }
}

function kruskal(arr) {

}

function callPrim() {
    prim(arr);
}

function callKruskal() {
    kruskal(arr);
}

const MAX = Infinity;
const MIN = 0;
const arr = [
    [MIN, 9, 2, MAX, 6],
    [9, MIN, 3, MAX, MAX],
    [2, 3, MIN, 5, MAX],
    [MAX, MAX, 5, MIN, 1],
    [6, MAX, MAX, 1, MIN],
]

export { callPrim, callKruskal }