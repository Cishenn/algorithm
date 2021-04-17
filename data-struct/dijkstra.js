/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-10 20:06:52
 * @LastEditTime: 2021-04-14 18:00:10
 * @FilePath: \algorithm\classic\dijkstra.js
 * @Description: 
 */

function Node(val, pre) {
    this.val = val;
    this.pre = pre || null;
}

/**
 * @description: 
 * @event: 
 * @param {*} matrix
 * @param {*} start
 * @return {*}
 */
function dijkstra(matrix, start = 0) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    const distance = new Array(rows);
    for (let i = 0; i < rows; i++) {
        distance[i] = new Node(MAX);
    }
    distance[start] = new Node(0);

    const isVisited = new Array(rows).fill(false);

    // main
    while (isVisited.some(item => !item)) {
        isVisited[start] = true;
        if (distance[start].val < MAX) {
            for (let i = 0; i < cols; ++i) {
                if ((distance[start].val + matrix[start][i]) < distance[i].val) {
                    distance[i].val = distance[start].val + matrix[start][i];
                    distance[i].pre = start;
                }
            }
        }
        let min = MAX;
        let minIndex = -1;
        for (let i = 0; i < cols; ++i)
            while (!isVisited[i] && distance[i].val < min) {
                min = distance[i].val;
                minIndex = i;
            }
        start = minIndex;
    }
    return distance;
}

function callDijkstra() {
    console.log(dijkstra(arr, 1));
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

export { callDijkstra }