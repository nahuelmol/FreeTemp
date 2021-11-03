const fs = require('fs')
const { exec } = require('child_process')

const AddToLog = line => {
	fs.appendFile('logs/log.txt', line, err => {
  		if (err) return 'There is an error => '+ err;
	})
}


module.exports = {
	AddToLog
}
