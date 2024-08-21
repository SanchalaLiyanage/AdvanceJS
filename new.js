//Q1) Create a H2 heading element with text - "Hello JavaScript". Append 
let heading = document.querySelector("h1")
console.dir(heading)

heading.innerText = ("Apna Colleage Java Script")
heading.innerText= heading.innerText+ " Java Script"


//Q2)  Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
let newd = document.querySelectorAll(".box")

//First Method
// newd[0].innerText = "New1"
// newd[1].innerText = "New2"
// newd[2].innerText = "New3"


//Second Method
let idx = 1;
for(div of newd){
    div.innerText = `New unique of ${idx}`;
    idx++;
}








