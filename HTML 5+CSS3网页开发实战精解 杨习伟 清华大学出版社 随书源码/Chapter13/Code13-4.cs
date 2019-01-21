interface ApplicationCache {
	// 更新状态
	const unsigned short UNCACHED = 0;
	const unsigned short IDLE = 1;
	const unsigned short CHECKING = 2;
	const unsigned short DOWNLOADING = 3;
	const unsigned short UPDATEREADY = 4;
	const unsigned short OBSOLETE = 5;
	readonly attribute unsigned short status;
	
	// 更新方法
	void update();
	void swapCache();
	
	// 事件
	attribute Function onchecking;
	attribute Function onerror;
	attribute Function onnoupdate;
	attribute Function ondownloading;
	attribute Function onprogress;
	attribute Function onupdateready;
	attribute Function oncached;
	attribute Function onobsolete;
};
ApplicationCache implements EventTarget;

