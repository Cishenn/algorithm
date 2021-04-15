/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-14 17:41:12
 * @LastEditTime: 2021-04-14 17:58:28
 * @FilePath: \algorithm\classic\floyd.js
 * @Description: 
 */

function initialization() {
    let distance = new Array(LEN + 1);
    for (let i = 1; i <= LEN; i++)
        distance[i] = [];

    for (let i = 1; i <= LEN; i++)
        for (let j = 1; j <= LEN; j++) {
            distance[i][j] = (i === j) ? MIN : INF;
        }

    distance[1][2] = 9;
    distance[2][1] = 9;
    distance[1][3] = 2;
    distance[3][1] = 2;
    distance[1][5] = 6;
    distance[5][1] = 6;
    distance[2][3] = 3;
    distance[3][2] = 3;
    distance[3][4] = 5;
    distance[4][3] = 5;
    distance[4][5] = 1;
    distance[5][4] = 1;

    return distance;
}

const LEN = 5;
const INF = Infinity;
const MIN = 0;

function floyd(distance) {
    if (!distance)
        return null;
    for (let transit = 1; transit <= LEN; transit++)
        for (let start = 1; start <= LEN; start++)
            for (let end = 1; end <= LEN; end++)
                if (distance[start][end] > distance[start][transit] + distance[transit][end])
                    distance[start][end] = distance[start][transit] + distance[transit][end];

    return distance;
}

export { floyd, initialization }