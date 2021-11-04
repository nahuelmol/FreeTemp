const { exec } = require('child_process')
const { AddToLog } = require('./LogEnviron')

const DeleteFile = path => {
	exec(`del ${path}`, (err, out, din) => {
			var i = 0;
			var splited = path.split('\\')
			var name = splited.slice(-1)
			if(err){
				AddToLog(`\n${err}\n`)
			}

			if(out !== ''){
				out = out.replace(/\r?\n|\r/g, '')
				var msg = '\ncannot be deleted: '+ name

				AddToLog(msg)
			}else{
				var msg = '\nwas deleted: '+ name
				AddToLog(msg)
			}
		})
}

const DeleteDir = path => {
	exec(`rmdir ${path} /s /q`, (err, out, din) => {
		if(err){
			AddToLog(`\n${err}\n`)
		}

		var dirs = 'DIRS deleted: ', out
		AddToLog(dirs)
	})
}

module.exports = {
	DeleteFile,
	DeleteDir
}