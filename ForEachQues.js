//For a given array of numbers, print the square of each value using the ForEach Loop

let array = [10,2,4,5,20,6,7,40];


//First Type
array.forEach( (val) =>{
    console.log(val * val)
})


//Second Type
let multi = (val) =>{
    console.log(val * val)
}

array.forEach(multi);