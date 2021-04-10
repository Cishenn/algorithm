/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-10 13:31:53
 * @LastEditors: Cishenn Lee
 * @LastEditTime: 2021-04-10 13:31:56
 * @Description: Selection Sort contains shellSort and insertSort 
 */
function insertSort(arr){
   
}

function shellSort(arr){
    for(let gap=Math.floor(arr.length>>1);gap>0;gap=Math.floor(gap>>1)){
        for(let i=gap;i<arr.length;++i){
            let val=arr[i];
            let j=i-1;
            while(j>=0&&val<arr[j]){
                arr[j+1]=arr[j];
                j-=gap;
            }
            arr[j]=val;
        }
    }
    return arr;
}

export {insertSort, shellSort}
