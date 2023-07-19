let arr = [1,3,5,7,3,1,4,9];
let newArr = []

for(let x = 0; x < arr.length; x++){
    if(!newArr.includes(arr[x])){
        newArr.push(arr[x])
    }
}
console.log(newArr)