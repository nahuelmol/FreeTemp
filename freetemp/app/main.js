const { LookinTemp, DeleteTempContent } = require('./content/look_content')
const { exec } = require('child_process')
const { AddToLog } = require('./content/LogEnviron')
const fs = require('fs')

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

		
exec('mkdir logs', (err,dout,derr) => {
	var data = 'log file will save changes: ' + module.parent
	
	fs.writeFile('logs/log.txt', data, err => {
		if (err) throw err
	})
})

if(module.parent === null){
	Main()
}
