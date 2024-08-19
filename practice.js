//Write a code which can give grades to students according to their scores
// 80-100 = A 
// 70-79 = B
// 60-69 = C
// 50-59 = D
// 0-49 = F

       
let num = prompt("Enter Your Score: ")

let result = num<= 49? ("F"): num<=59? ("D"): num<=69? ("C"): num<=79? ("B"): num<=100? ("A"): ("Invalid Score")
console.log(result);