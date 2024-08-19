//Q1) Prompt the user to enter their full name. Generate a username for them based on the input. 
// Strat username withh @, followed bybtheir full name and ending with the fullname length

let fname = prompt("Enter Your Full Name: ")

let fname1 = fname.replace(/ /g, '');
let uname = console.log("@"+fname+""+fname.length+"")


//For a given array with marks of students ---> [85,97,44,37,76,60]
//Find the average marks of the entire class

 let arr1 = [85,97,44,37,76,60]
let sum = 0;

for(let val of arr1){
    sum += val;
}

let avg = sum/arr1.length;
console.log(avg)

//For a given array with prices of 5 items -> [250,645,300,900,50]
//All items have an offer of 10% Off on them. Change the array to store final price after applying offer.

let prices = [250,645,300,900,50];
let newprice = [];

for(let d=0; d< prices.length; d++){
    let discount = prices[d]/10;
    let final = prices[d]-discount;
    newprice.push(final);
}

console.log(newprice);

