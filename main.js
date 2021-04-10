// 2021年4月10日 11:45:48
import { quickSort, bubbleSort } from './sort/swap-sort.js';
import { shellSort, insertSort } from './sort/insertion-sort.js';
import { heapSort, selectSort } from './sort/selection-sort.js';
import { countSort, radixSort, bucketSort } from './sort/no-comparison-sort.js';
import { mergeSort } from './sort/merge-sort.js';

function main() {
    const arr = [1, 2, 8, 5, 1, 7];
    console.log('raw: '+arr);
    //console.log(quickSort(arr, 0, arr.length - 1).join('<'));
    //console.log(bubbleSort(arr).join('<'));
//console.log(shellSort(arr).join('<');
    //console.log(bucketSort(arr).join('<'));
    //console.log(selectSort(arr).join('<'));
    console.log(mergeSort(arr).join('<'));
}
main();
