let testArray = new Array<string>();
testArray = ["ghghsadasd", "aase yuuiuooi", "a", "bgt", "c", "ghghghgh bbbbbb"];

testArray.sort((a,b) => a.length - b.length);
console.log("Array sorted on length : " + testArray)
testArray.reverse()
console.log("Reversed array :" + testArray)

