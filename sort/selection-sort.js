// Selection Sort includes heapSort and selectSort
var len=0; // len 是会变化的.. 代表着还没有排序好的数量
function heapBuild(arr){
    len = arr.length;
    // TO-DO 为什么是从中序到根节点来构造.
    for(let i=Math.floor(arr.length>>1);i>=0;--i){
        heapify(arr, i);
    }
}

function heapify(arr,i){
    let left=i*2+1;
    let right=i*2+2;
    let largest=i;
    if(left<len&&arr[left]>arr[largest])
        largest=left;
    if(right<len&&arr[right]>arr[largest])
        largest=right;
    if(i!==largest){
        [arr[i],arr[largest]]=[arr[largest],arr[i]];
        heapify(arr, largest);
    }
}

function heapSort(arr){
    heapBuild(arr);
    // TO-DO 为什么要从最右下子开始和根节点换?
    for (let i = arr.length - 1; i > 0;--i){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        len--;
        heapify(arr, 0);
    }
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
