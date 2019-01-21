// 求范围内的最大素数
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
		postMessage(e.data + "以内的最大素数是：" + num);
		//close(); // 关闭子线程
		break;
	}
}