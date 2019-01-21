// 创建异步请求子线程
var xhrWorker = new Worker('Code16-4xhrWorker.js');
// 监听异步请求子线程的消息
xhrWorker.onmessage = function(e){
	// 创建数据处理子线程
	var rangeWorker = new Worker('Code16-4rangeWorker.js');
	// 传递数据
	rangeWorker.postMessage(e.data);
	// 监听数据处理子线程的消息
	rangeWorker.onmessage = function(e){
		postMessage(e.data);  // 向页面发送消息
	}
}
