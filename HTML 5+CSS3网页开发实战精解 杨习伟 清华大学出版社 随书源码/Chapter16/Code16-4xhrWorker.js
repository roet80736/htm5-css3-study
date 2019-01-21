// 异步请求数据
var xmlHttp = new XMLHttpRequest();
xmlHttp.onerror=function(e){
	postMessage(null);
}
xmlHttp.onload=function(e){
	postMessage(xmlHttp.responseText);
	close();
}
xmlHttp.open("get","Code16-4xhr.txt?"+(new Date()).getTime(),true);
xmlHttp.send(null);
