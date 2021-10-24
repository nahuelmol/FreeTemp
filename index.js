var PORT;
var CURRENT_TAB;

chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(alltab) {
		PORT = chrome.runtime.connectNative('FreeTemp')
	});
});



console.log('Hi from the background, working...')

