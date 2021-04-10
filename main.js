// 2021年4月10日 11:45:48
import { quickSort } from './sort/quickSort.js';
function main() {
    const arr = [1, 2, 8, 5, 1, 7];
    console.log(quickSort(arr, 0, arr.length - 1));
}
main();