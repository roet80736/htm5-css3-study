// 创建第一个子线程
var subworker = new Worker('Code16-3subworker.js');
subworker.postMessage(100);
// 监听第一个子线程的消息
subworker.onmessage = function(e){
	// 创建第二个子线程
	var subworker2 = new Worker('Code16-3subworker2.js');
	// 把第一个线程发来的数据发送到第二个线程
	subworker2.postMessage(e.data);
	// 监听第二个子线程的消息
	subworker2.onmessage = function(e){
		postMessage(e.data);  // 向页面发送消息
	}
}
