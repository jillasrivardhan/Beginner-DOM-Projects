

// getelementbyid is works upon array-like structure so it can't increment so we use queryselector

let a = document.querySelector(".show");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let rest = document.querySelector(".rest");


let x = 0;

inc.addEventListener("click", function(){
    x++;
    a.textContent = x;
    if(x>=0){
      a.style.color = "green"
    }
})

dec.addEventListener("click", function(){
    x--;
    a.textContent = x;
    if(x<0){
      a.style.color = "red"
    }
})


rest.addEventListener("click", function(){
    x = 0;
    a.textContent = x;
})

a.textContent = x
if(x===0){
      a.style.color = "green"
    }