// 基本设置
var num_workers = 10;
var step = 1000;
if(typeof Worker !== "undefined"){
	// 开始添加子线程
	for (var i = 0; i <= num_workers; i += 1){
		var subworker = new Worker('Code16-2subworker.js');
		subworker.onmessage = storeResult;
		subworker.postMessage(i * step);
	}
}else{
	postMessage("浏览器不支持线程嵌套！");
}
// 结果处理
function storeResult(e){
	postMessage(e.data); // 向页面发送消息!
	//this.terminate(); // 关闭子线程
}