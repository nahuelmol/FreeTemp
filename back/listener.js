var LISTED_COOKIES = ''

browser.runtime.onMessage.addListener(
  	(data, sender, sendResponse) => {

  		if(data.type == 'ask_cookies'){

        var handler = cookiesStore => {
          LISTED_COOKIES = cookiesStore
        }

        browser.cookies.getAllCookieStores().then(handler);

			  var response = { 
          cookies:LISTED_COOKIES,
          msg:'sending cookies'}

			  sendResponse(response)
  		}

})