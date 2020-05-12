var testArray = new Array();
testArray = ["tavisca", "a cxloyalty company", "the", "to", "a", "connexions"];
testArray.sort(function (a, b) { return a.length - b.length; });
console.log("Array sorted on length : " + testArray);
testArray.reverse();
console.log("Reversed array :" + testArray);
