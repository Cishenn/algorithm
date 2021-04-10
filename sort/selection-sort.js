// Selection Sort includes heapSort and selectSort
var len=0;
function heapBuild(arr){
    len=arr.length;
    for(let i=Math.floor(arr.length>>1);i>=0;--i){
        heapify(arr, i);
    }
}

function heapify(arr,i){
    let left=i*2+1;
    let right=i*2+2;
    let largest=i;
    if(left<arr.length&&arr[left]>arr[largest])
        largest=left;
    if(right<arr.length&&arr[right]>arr[largest])
        largest=right;
    if(i!==largest){
        [arr[i],arr[largest]]=[arr[largest],arr[i]];
        heapify(arr, largest);
    }
}

function heapSort(arr){
    heapBuild(arr);
    // TO-DO
    return arr;
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
