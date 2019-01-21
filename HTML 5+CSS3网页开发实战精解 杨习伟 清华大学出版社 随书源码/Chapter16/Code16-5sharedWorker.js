var count = 0; // 计数器
// 监听新链接
onconnect = function(e) {
	count += 1;
	var port = e.ports[0];
	// 向该连接的页面发送消息
	port.postMessage("欢迎你! 这是链接" + count);
	// 为该连接添加消息监听事件
	port.onmessage = function(e) {
		port.postMessage("线程收到你的消息：" + e.data);
	}
}
