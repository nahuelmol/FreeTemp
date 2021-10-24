const { LookinTemp, DeleteTempContent } = require('./content/look_content')

function Main(){
	var onResponse = res => {
		var resHandler = res => {
			var i = 0

			res.forEach( uri => {
				if(uri.endsWith('\r')){
					res[i] = uri.replace('\r', '')
				}
				i += 1 
			})

			res.forEach( uri => {
				if ((uri.endsWith('\\.')) && (uri.endsWith('\\..'))) {
					res.splice(uri)
				}
			})

			console.log('URIs: ', res)
		}

		DeleteTempContent(res, resHandler)
	}

	LookinTemp(onResponse)
}

if(module.parent === null){
	Main()
}
