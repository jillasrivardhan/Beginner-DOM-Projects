
let x = Math.random()

let a = document.querySelector("button")


if(x > 0 && x  < 1/3){
   a.style.backgroundColor = "red"
}else if(x > 1/3 && x < 2/3){
   a.style.backgroundColor = "green"
}else{
   a.style.backgroundColor = "yellow"
}