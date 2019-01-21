// 求数组的最大值和最小值
onmessage = function (e){
	var arr = JSON.parse(e.data);
	var result={
		maxValue:0,
		minValue:0
	};
	if(arr.length>0){
		result.maxValue = arr[0];
		result.minValue = arr[0];
	}
	for(var i = 0, n = arr.length; i < n; i++){
		// 求最大值
		if(result.maxValue < arr[i]){
			result.maxValue = arr[i];
		}
		// 求最小值
		if(result.minValue > arr[i]){
			result.minValue = arr[i];
		}		
	}
	postMessage(JSON.stringify(result));
	close();
}