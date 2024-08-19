//arr.forEach(callBackFunction)
//CallbackFunction: Here it isa a function to excute for each element in the array
// A callbackfunction is a function passed as an argument to another function

let arr = ["Snch", "Kelum", "Navodi", "Shein", "Pawan", "Tharindu"]

arr.forEach(function read(val,idx,arr){ //Here using ForEach we can get value, index and arrays
    console.log(val.toUpperCase(),idx, arr)
})

//For each only using for arrays. Not for strings
//ForEach is a higher order function

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(),idx, arr)
})