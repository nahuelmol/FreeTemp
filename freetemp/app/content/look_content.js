const { exec } = require('child_process')
const os 	= require('os')
const { isString, isMyArray } = require('./checkType')


var TEMP_DIR = os.tmpdir()

var get_filename = (arr, FileHandler) => {

	var length = arr.length - 1
	var target = arr[length]

	if(isString(target)){

		if(target.endsWith('\r')){
			target = target.replace(/\r?\n|\r/g, '')

			if((target != '.') && (target != '..') && (target != 'bytes') && (target != 'libres')){
				return target
			}else{
				return;
			}
		}
	}
}

var DeleteTempContent = (CONTENT, resHandler) => {

	var URIS = []

	for(each of CONTENT){

		var array_file = each.split(' ')
		var filename = get_filename(array_file)

		if(filename != undefined){
			var uri  =  TEMP_DIR +'\\'+filename 
			URIS.push(uri)
		}

	}

	for(each of URIS){
		exec(`del ${each}`, (err, out, din) => {
			var i = 0;
			if(err != undefined){
				return 'There is an error'
			}

			if(out !== ''){
				out = out.replace(/\r?\n|\r/g, '')
				console.log(out + ' file cannot be deleted')
			}
		})

		exec(`rmdir ${each} \s`, (err, out, din) => {
			if(err != undefined){
				return 'There is an error'
			}

			console.log('DIRS OUT: ', out)
		})
	}

	resHandler(URIS)
}

var LookinTemp = (call) => {

	var RESPONSE = []
	var DIR_CONTENT = []

	exec(`dir ${TEMP_DIR}`, (error, stdout, stdin) => {
		
		if(error != undefined){
			return 'There is an error: ', error
		}

		var result = isString(stdout)
		RESPONSE = result.split('\n')

		for (each in RESPONSE){
			if (each > 4){
				DIR_CONTENT.push(RESPONSE[each]) 
			}
		}
		
		call(DIR_CONTENT)
	})
}

module.exports = {
	LookinTemp,
	DeleteTempContent
}