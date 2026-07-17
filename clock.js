//setInterval keeps running the function repeatedly with a certain tie limit we pass as a parameter

//time is storedin date object

//clearInterval stops the setInterval function


function clock(){
   const t = new Date();
   document.querySelector(".time").innerHTML = t.toLocaleTimeString();
}

function stop(){
   clearInterval(my)
}

function start(){ 
   my = setInterval(clock,1000)
}
