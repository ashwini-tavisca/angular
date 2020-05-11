let testString  = "my name is John Doe. i work in Tavisca, a cxloaylty company. I work as a software engineer."

// Occurences for character a
let count = 0;
for(let i =0 ; i<testString.length; i++)
{
    if(testString[i] =='a')
    {
        count++;
    }
}
console.log("Occurences of a : "+count)

// Number of statements
console.log("Number of statements : " +testString.split('.').length)

// Convert first character of every statement to capital
let newString  = testString[0].toUpperCase()
console.log("zz : " + newString)

for(let i =1 ; i<testString.length; i++)
{
    if(testString[i] =='.')
    {
        newString = newString + testString[i]              
        for(let j = i+1; j<testString.length; j++)
        {
            if(testString[j].match(/[a-zA-Z]/))
            {
                newString = newString + testString[j].toUpperCase() 
                i = j               
                break
            }else{
                newString = newString + testString[j] 
            }
        }        
    }
    else{
        newString = newString + testString[i];
    }
}
console.log("After update string is  : " + newString)
