ch = document.querySelectorAll
('[name="change"]');
// console.log(th);
ch.forEach((change) =>

{
  theme.addEventListener("click", () => localStorage.setItem("change", change.id));
}
);

function app() {
  st = localStorage.getItem("change");
  ch.forEach((change) => {
    if (change.id === st) 
    
    {


      change.checked = true;
    }
  }
  )
  
  ;
}
document.onload = app();

document.getElementById('sh').addEventListener("click",display);

function display(){
    var v=document.getElementById('search').value;
    req(v);
}


var info;
function req(s){
    const url="https://api.tvmaze.com/search/shows?q=";
    const xhr=new XMLHttpRequest;
    xhr.onload=function(){
        info=this.response;
        console.log(info);
        var t=document.getElementById('a');



        var b=document.createElement('b');
        t.appendChild(b);
        b.className='m';
        
    }
    xhr.onerror=function(){
        console.log('error');
    }


    xhr.open("GET",url+s);
    xhr.send();
    
}