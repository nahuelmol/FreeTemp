const { exec } = require('child_process')
const fs = require('fs')
const os 	= require('os')

const { DeleteFile, DeleteDir } = require('./Delete')
const { isString, isMyArray } = require('./checkType')
const { AddToLog } = require('./LogEnviron')

var TEMP_DIR = os.tmpdir()
var HOME_DIR = os.homedir()

var NPM_CACHE_DIR = HOME_DIR + '/AppData/Roaming/npm-cache'
var PIP_CACHE_DIR = HOME_DIR + '/AppData/Local/pip/cache'

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

		var stat = fs.statSync(each)

		if(stat.isFile()){
			AddToLog(`\nfile:${each}`)
			DeleteFile(each)
		}

		if(stat.isDirectory()){
			AddToLog(`\ndir:${each}`)
			DeleteDir(each)
		}

	}

	resHandler(URIS)
}

var LookinNPM = call => {
	var RESPONSE = []
	var DIR_CONT = []

	exec(`dir ${NPM_CACHE_DIR}`, (err, dout, derr) => {
		if(err){
			return `There is an error: ${err}`
		}

		RESPONSE = dout.split('\n')

		for (each in RESPONSE){
			if (each > 4){
				DIR_CONTENT.push(RESPONSE[each]) 
			}
		}
		
		call(DIR_CONTENT)
	})
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