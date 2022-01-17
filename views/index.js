timertext=document.querySelector('.timer')
timer=60;

window.addEventListener('load',parent)

function parent(){
    setInterval(myTimer, 1000);
}
function myTimer(){
    timer--;
    timertext.innerHTML = timer
    if(timertext.innerHTML==0){ 
        timer=61;
    }
}
const endpoint = 'api.json';
let currency={}

async function call(){await fetch(endpoint)
 .then(blob =>blob.json())
.then(data =>currency={...data}

  );
 console.log(currency.btcinr)
 for (const x in currency) {
    console.log(currency[x].volume)
  }
}

window.addEventListener('load',call)







