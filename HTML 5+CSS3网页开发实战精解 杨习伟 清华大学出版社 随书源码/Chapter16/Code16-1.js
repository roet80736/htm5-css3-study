/*self.onmessage = function(e){
	var val = "Hello,";
	//throw "sdsd";
	self.postMessage(val+e.data);
}*/
onmessage = function (e) {
	var num = 1 * e.data + 1;
	search : while (num>1) {
		num --;
		isprime = false;
		for (var i = 2,x=Math.sqrt(num) ; i <= x; i++){
			if (num % i == 0){
				continue search;
			}
		}
		postMessage(num);
		break;
	}
}