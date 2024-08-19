//For Of loops used to iterate over the values of an iterable object like an array or a string.
// It is a new way to loop over any iterable object.


//Using for Of loop we can get all the characters of string or array
//We can use "For Of loops" for objects. We can use "For In loops" for objects.

let str = "Best Student"


let size = 0;
for (let i of str){
        console.log(i);
        size++;
}

console.log("Size of the string is: " + size);