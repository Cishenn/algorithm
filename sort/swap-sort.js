/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-10 11:36:12
 * @LastEditors: Cishenn Lee
 * @LastEditTime: 2021-04-10 13:25:27
 * @Description: Swap Sort contains quickSort and bubbleSort
 */

function quickSort(arr, low, high) {
    if(low<high){
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
}

function partition(arr, low, high){
    let pivot = arr[low];
    while (low < high) {
        while (low < high && arr[high] >= pivot)
            --high;
        arr[low] = arr[high];
        while (low < high && arr[low] < pivot)
            ++low;
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}

//Sat Apr 10 13:00:04 CST 2021
function bubbleSort(arr){
	for(let i=0;i<arr.length-1;++i){
		let flag=1;
		for(let j=arr.length-1;j>i;--j){
			if(arr[j]<arr[j-1]){
				flag=0;
				[arr[j-1],arr[j]]=[arr[j],arr[j-1]];
			}
		}
        if (flag)
            return arr;
	}
    return arr;
}

export { quickSort , bubbleSort};