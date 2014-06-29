// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// I feel like this function is overly bulky...
var stringifyJSON = function(obj) {
var stringifyed = "";
var numberOfIterations = 0;
var lastChar;
var stringify = function(argument) {
	numberOfIterations++;
	lastChar = stringifyed.charAt(stringifyed.length -1)
	if (numberOfIterations > 2 && lastChar !== "[" && lastChar !== ":") {
		stringifyed += ",";
	}
	if (typeof(argument) === "number" || argument) {
		if (typeof(argument) === "string") {
			var tempString = '"' + argument + '"';
			tempString = '"' + argument + '"';
			stringifyed += tempString;
		}else if (Array.isArray(argument)) {
			stringifyed += "[";
			for (var i = 0; i < argument.length; i++) {
				stringify(argument[i]);
			}
			stringifyed += "]";
		}else if (typeof(argument) === "object"){
			stringifyed += "{"
			for(entry in argument){
				if (typeof(argument[entry]) !== "function" && typeof(argument[entry]) !== "undefined") {
					stringifyed += '"' + entry + '"' + ":";
					stringify(argument[entry]);
					stringifyed += ","
				}
			}
			stringifyed += "}";
			stringifyed = stringifyed.replace(/(,}$)/, "}");
		}else {
			stringifyed += argument.toString();
		}
	}else if (argument === null) {
		stringifyed += 'null';
	}else if (argument === false) {
		stringifyed += 'false';
	}
}
stringify(obj);
return stringifyed;
};
