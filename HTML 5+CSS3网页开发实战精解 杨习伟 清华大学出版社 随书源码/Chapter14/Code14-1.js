// ������Ϣ�¼��������Ч����Դ


// ��Ӱ�����
var originWhiteList = ["portal.example.com", "games.example.com","www.example.com"];
// �����Դ
function checkWhiteList(origin) {
	for (var i=0; i<originWhiteList.length; i++) {
		if (origin === originWhiteList[i]) {
			return true;
		}
	}
	return false;
}
// ��Ϣ�¼�����
function messageHandler(e) {
	if(checkWhiteList(e.origin)) {
		processMessage(e.data);
	} else {
		// ����δȷ�ϵ���Ϣ��Դ
	}
}
// �����Ϣ�¼�������
window.addEventListener("message", messageHandler, true);