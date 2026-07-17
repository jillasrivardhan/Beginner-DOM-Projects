
let arr = [' "It always seems impossible until it is done." — Nelson Mandela',
           'Not all those who wander are lost." —JRR Tolkien',
           'Life is like riding a bicycle. To keep your balance, you must keep moving." — Albert Einstein',
           'No problem can be solved from the same level of consciousness that created it. We must see the world anew. (Albert Einstein)',
           'History will be kind to me, for I intend to write it. (Winston Churchill)'
         ]


let x = document.querySelector("button")
let z = document.querySelector(".showing_quotes")

let y = 0
x.addEventListener("click",function(){
   if(y === 0){
      z.textContent = arr[0]
      y = 1
   }else if(y===1){
      z.textContent = arr[1]
      y=2
   }else if(y===2){
      z.textContent = arr[2]
      y=3
   }else if(y===3){
      z.textContent = arr[3]
      y=4
   }else{
      z.textContent = arr[4]
     y=0
   }
})