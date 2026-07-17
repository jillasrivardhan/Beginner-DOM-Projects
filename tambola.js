let div = document.querySelector(".main-container")
let button = document.querySelector(".button")

for(let i = 1;i < 101;i++){
   let divs = document.createElement("div")
   divs.classList.add("number")
   divs.innerText = i
   div.appendChild(divs)
}

function randomNumber(val){
   let x = Math.floor(Math.random() * 101)
   console.log(x)
   let y = document.querySelectorAll(".number")
   
   y.forEach((div)=>{
      if(x === Number(div.textContent)){
         div.style.backgroundColor = "orange"
      }
   })
   
}

// let count = 0
// let c = setInterval(()=>{
//    randomNumber()
//    if(count === 100){
//       clearInterval(c)
//       count++
//    }
// },1000)


