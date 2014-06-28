// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    var classElements = new Array();
    var allNodesOnDocument = document.all;
    var pattern = new RegExp("(^|\\s)"+className+"(\\s|$)");
    for (var i = 0; i < allNodesOnDocument.length; i++) {
        if(pattern.test(allNodesOnDocument[i].className)){
            classElements.push(allNodesOnDocument[i]);
        }
    }
    return classElements;
};
