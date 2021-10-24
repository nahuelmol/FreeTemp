const isString = (str) => {
	if (typeof str === 'string'){
		return str;
	}else if (typeof str === 'object'){
		return str;
	}else{
		var result = ' is not a string or object'
		var str_type = ', is ' + typeof str
		return str + result + str_type
	}
} 

const isMyArray = (array) => {
	if(typeof array === 'array'){
		return true;
	}else{
		return false;
	}
}

module.exports = {
	isString,
	isMyArray
}  