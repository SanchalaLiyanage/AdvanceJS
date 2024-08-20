//We are given array of marks of students. Filter out of the marks of students that scored 90+

let arr = [35,68,52,90,98,59,100,85]

const filterMarks = arr.filter((val) =>{
    return val>=90;
})

console.log(filterMarks)

//Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all the numbers in the array
//Use the reduve method to calculate product of all numbers in the array

let n = prompt ("Enter a value :")
let array1 = []

for (let i = 1; i<=n; i++ ){
    array1[i-1] = i;
}

const output = array1.reduce ((result,current) =>{
    return result + current
})

console.log (output)

const output2 = array1.reduce((result, current) =>{
    return result*current
})