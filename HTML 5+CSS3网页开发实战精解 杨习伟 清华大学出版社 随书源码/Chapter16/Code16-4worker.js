// �����첽�������߳�
var xhrWorker = new Worker('Code16-4xhrWorker.js');
// �����첽�������̵߳���Ϣ
xhrWorker.onmessage = function(e){
	// �������ݴ������߳�
	var rangeWorker = new Worker('Code16-4rangeWorker.js');
	// ��������
	rangeWorker.postMessage(e.data);
	// �������ݴ������̵߳���Ϣ
	rangeWorker.onmessage = function(e){
		postMessage(e.data);  // ��ҳ�淢����Ϣ
	}
}
