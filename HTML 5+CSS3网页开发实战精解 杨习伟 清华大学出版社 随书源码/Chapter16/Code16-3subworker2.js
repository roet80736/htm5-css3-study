onmessage = function (e) {
	postMessage("这是第二个线程，收到数据：" + e.data);
	close(); // 关闭线程
}