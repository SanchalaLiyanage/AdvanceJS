//Create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string

function countS(str){
let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }

    }
    console.log(count)
}

countS("Contigeous")

//Create an arrow function for that same above task

const CountVowels = (str) =>{
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }

    }
    console.log(count)
}

CountVowels("animal");