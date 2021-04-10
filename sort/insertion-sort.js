/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-10 13:31:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-10 21:53:17
 * @Description: Selection Sort contains shellSort and insertSort 
 */
function insertSort(arr) {

}

function shellSort(arr) {
    for (let gap = Math.floor(arr.length >> 1); gap > 0; gap = Math.floor(gap >> 1)) {
        for (let i = gap; i < arr.length; ++i) {
            let val = arr[i];
            let j = i - gap;
            while (j >= 0 && val < arr[j]) {
                arr[j + gap] = arr[j];
                j -= gap;
            }
            arr[j + gap] = val;
        }
    }
    return arr;
}

export { insertSort, shellSort }