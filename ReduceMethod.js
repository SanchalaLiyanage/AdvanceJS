//Performs some operations and reduce the array to a single value. It returns that single value
//Here we have many inputs and have only one output. ex: sum, avg

let array =[10,20,30,40]

const output = array.reduce( (result , current) => {
       return result + current
} )

console.log(output)

// first ==> result = 0  and current = 10 -----> result+ current= 10 ------> That value stores in result. Then result = 10
// Second ==> result = 10 & current = 20 -----> 10+20=30 -----> New result is 30
//Third ==> result = 30 & current=30 --------> 30+30=60 ----> result = 60
//Fourth ==> result= 60 & current=40 ----> 60+40=100---> New result= 100
//Final output = 100


//To find the largest value

let arr1 = [2,4,3,45,76,1, 100]

const largest = arr1.reduce ( (result, current) =>{
    // if(result> current){
    //     return result
    // }
    // else{
    //     return result = current;
    // }

    return result > current ? result : current;
}
)

console.log(largest)