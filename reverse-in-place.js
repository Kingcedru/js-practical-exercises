let a = "I am the good boy"
let w = [] 
let b = a.split(" ")
let s
for(let x = 0; x < b.length; x++){
    s = b[x].split("").reverse().join("")
    w.push(s)
 }
console.log(w.join(" "))
