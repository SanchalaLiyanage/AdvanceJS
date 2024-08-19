//Q1) Create an array to strore companies -> "Bloomberg", "Mircosoft", "Uber", "Google", "IBM", "Netflix"


//Remove the first company name from the array
let companies = ["Bloomberg", "Mirosoft", "Uber", "Google", "IBM", "Netflix"]

console.log(companies);
companies.shift();
console.log(companies)


//Remove uber and add Ola in its place
companies.splice(1,1,"Ola")
console.log(companies)

//Add amazon at the end
companies.push("Amazon")
console.log(companies)