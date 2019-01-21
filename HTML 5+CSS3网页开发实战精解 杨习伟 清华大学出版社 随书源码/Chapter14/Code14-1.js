// 监听消息事件并检测有效的来源


// 添加白名单
var originWhiteList = ["portal.example.com", "games.example.com","www.example.com"];
// 检测来源
function checkWhiteList(origin) {
	for (var i=0; i<originWhiteList.length; i++) {
		if (origin === originWhiteList[i]) {
			return true;
		}
	}
	return false;
}
// 消息事件处理
function messageHandler(e) {
	if(checkWhiteList(e.origin)) {
		processMessage(e.data);
	} else {
		// 忽略未确认的消息来源
	}
}
// 添加消息事件监听器
window.addEventListener("message", messageHandler, true);