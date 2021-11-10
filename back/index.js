var PORT;
var CURRENT_TAB;

var onMsgReceive = res => {
	console.log('received: ',res)
}

function logStores(cookieStores) {

	if(cookieStores == ' '){
		console.log('there is not a cookie stored')
		return true
	}

  	console.log('There exists cookies')
  	window.open('../views/Main.html')

  	return true
}



chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(alltab) {

		PORT = chrome.runtime.connectNative('FreeTemp')
		console.log('Temp is being cleaned in your system')

		PORT.onMessage.addListener(res => onMsgReceive(res))

		var getting = browser.cookies.getAllCookieStores();
		getting.then(logStores);

	});
});


console.log('Hi from the background, working...')

