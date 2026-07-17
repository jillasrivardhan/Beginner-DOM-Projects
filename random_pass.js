

let x = document.querySelector(".show")

let y = document.querySelector("button")

let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+?:~"

y.addEventListener("click",function(){

   let pass = ""
   for(let i = 1;i < 9;i++){
      let rand = Math.floor(Math.random() * chars.length)

      pass += chars[rand]
   }
   x.textContent = pass
   
})


