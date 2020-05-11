var testArray = new Array();
testArray = ["ghghsadasd", "aase yuuiuooi", "a", "bgt", "c", "ghghghgh bbbbbb"];
testArray.sort(function (a, b) { return a.length - b.length; });
console.log("Array sorted on length : " + testArray);
testArray.reverse();
console.log("Reversed array :" + testArray);
