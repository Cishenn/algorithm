// Selection Sort includes heapSort and selectSort
function heapSort(arr){

}

function selectSort(arr){
    for(let i=0;i<arr.length-1;++i){
        let index=i;
        for(let j=i+1;j<arr.length;++j){
            if(arr[j]<arr[index])
                index=j;
        }
        [arr[i],arr[index]]=[arr[index],arr[i]];
    }
    return arr;
}

export {heapSort, selectSort}
