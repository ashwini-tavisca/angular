let testArray = new Array<string>();
testArray = ["tavisca", "a cxloyalty company", "the", "to", "a", "connexions"];

testArray.sort((a,b) => a.length - b.length);
console.log("Array sorted on length : " + testArray)
testArray.reverse()
console.log("Reversed array :" + testArray)

