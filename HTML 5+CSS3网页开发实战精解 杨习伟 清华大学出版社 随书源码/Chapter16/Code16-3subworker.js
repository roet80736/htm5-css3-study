onmessage = function (e) {
	postMessage("这是第一个线程");
	close(); // 关闭线程
}