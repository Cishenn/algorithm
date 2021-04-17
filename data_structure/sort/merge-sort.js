// divide and conquer
function mergeSort(arr){
    if(arr.length<2)
        return arr;
    const mid=Math.floor((arr.length)>>1);
    const left=arr.slice(0,mid);
    const right =arr.slice(mid,arr.length);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let l=0,r=0;
    const res=[];
    while(l<left.length&&r<right.length){
        if(left[l]<right[r])
            res.push(left[l++]);
        else
            res.push(right[r++]);
    }
    while(l<left.length)
        res.push(left[l++]);
    while(r<right.length)
        res.push(right[r++]);
    return res;
}

export {mergeSort}
