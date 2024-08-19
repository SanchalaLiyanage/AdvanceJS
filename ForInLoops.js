
// let student ={
//     name :"Kelum",
//     age : 25,
//     grade : "A"
// };

// for(let key in student){
//     console.log(key)
// }

//This For In loop key values of the object return.

//  Q1)  Print all even numbers from 0 to 100

// for(let i=0; i<=100; i++){
//     let result = i%2 == 0? console.log(i): "";
// }

//  Q2)  Creating a game where you with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

    let RandomNum =  30;
    let i = prompt("add a value");


    while(RandomNum !== i){
    i = prompt("add a value");
    }

    console.log(" Congratulations");
