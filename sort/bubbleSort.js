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
		if(flag)
			return arr
	}
	return arr
}
