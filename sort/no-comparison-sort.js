

//No Comparison Sort includes countSort, bucketSort and radixSort

function countSort(arr){
    let maxVal=Math.max(...arr);
    let bucket=new Array(maxVal+1).fill(0);
    for(let v of arr){
        bucket[v]++;
    }
    arr.length=0;
    for(let i in bucket){
        while(bucket[i]--)
            arr.push(i);
    }
    return arr;
}

const DEFAULT_BUCKETSIZE=5;
function bucketSort(arr, bucketSize){
    // interceptor
    if(arr.length<1)
        return arr;
    let maxVal=Math.max(...arr);
    let minVal=Math.min(...arr);
    if(minVal==maxVal)
        return arr;
    
    // initialization of buckets
    bucketSize=bucketSize || DEFAULT_BUCKETSIZE;
    const bucketCount=Math.ceil((maxVal-minVal)/bucketSize);
    const buckets=new Array(bucketCount);
    for(let i=0;i<buckets.length;++i)
        buckets[i]=[];
    //for(let v of buckets)
    //    v=[];
    //console.log(JSON.stringify(buckets));
    
    // map arr to buckets
    for(let v of arr){
         buckets[Math.floor((v-minVal)/bucketSize)].push(v);
   }
    // buckets -> arr
    arr.length=0;
    for(let v of buckets){
        v.sort((a,b)=>a-b);
        for(let ele of v){
            arr.push(ele);
        }
    }
    return arr;
}

function radixSort(arr){
    //TO-DO
}

export {countSort, bucketSort, radixSort}

