//Attributes
//getAttributes(attr)  ---------> To get the attribute value

let div = document.querySelector("div")
console.log(div)

let id = div.getAttribute("class"); //here in the brackets we can give the id instead of class
console.dir(id)

let name1 = div.getAttribute("name")
console.dir(name1)

//To change the attribute
let new1 = div.setAttribute("name", "new")
console.dir(new1)
//output should be --->before =<div class="box" name="name">New unique of 1</div>
                //    --->after =<div class="box" name="new">New unique of 1</div>


//*****Node.style */
div.style.backgroundColor= "Green"

div.style.color = "White"












