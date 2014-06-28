// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
var stringifyed;
//stringifyed['key'] = 'value';
if (obj) {
	if (typeof(obj) === "string") {
		var tempString = '"' + obj + '"';
		tempString = '"' + obj + '"';
		stringifyed = tempString;
	}else{
			stringifyed = obj.toString();
	}
}else if (obj === null) {
	stringifyed = 'null';
}else if (obj === false) {
	stringifyed = 'false';
}else if (obj === ''){
	stringifyed = Array.new ;
}

console.log(stringifyed);
return stringifyed;
};
