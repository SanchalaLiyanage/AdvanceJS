//Creates a new array of elements that give true for a condition / filter
//Ex: All even elements

let arr = [12, 3,45,65,68,14,64]

let Even = arr.filter( (val) =>
{
    return val % 2=== 0;
})

console.log(Even)