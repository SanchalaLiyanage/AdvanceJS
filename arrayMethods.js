//Push(): Add to end

let arr1 = [10,20,30,40,50]

arr1.push(60);
console.log(arr1)


//Pop(): Delete fro, end & return 
arr1.pop()
console.log(arr1)

 //toString(): converts array to String
 arr1.toString()
 console.log(arr1)

 arr2 = [100,200,300]
 let arr3 =arr1.concat(arr2)
 console.log(arr3)


 //Unshift()  add to start
 arr1.unshift('38')
 console.log(arr1)

 //shift()
 arr3.shift()
 console.log(arr2)

 //Slice()  :  Returns a piece of the array
 console.log(arr1.slice(0,2))


 //Splice() :  Change original Array (add, remove, replace)
 arr1.splice(2,2,222,323) //It remove two value from index 2 and 3 and after replace new two values
 console.log(arr1)

 arr1.splice(2,0,101); //It add 101 value to index number 2 place
 console.log(arr1)

 arr1.splice(1,1)
 console.log(arr1)

 arr1.splice(3) //Here when we assign only one value it means all the values behind that value will be remove
 console.log(arr1)