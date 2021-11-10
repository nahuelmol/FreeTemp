(function(){
	var main_div = document.getElementById('cookies_zone')
	var LISTED_COOKIES = ''

	var REQUEST = {
	      type: 'ask_cookies',
	   }
	
	var arrayData = browser.runtime.sendMessage(REQUEST);
	arrayData.then(res => {
		console.log(res.msg)
		for(let each of res.cookies){
			var this_div = document.createElement('div')
			main_div.appendChild(this_div)
		}
	})

})();