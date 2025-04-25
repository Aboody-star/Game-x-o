
/* التعريف*/
let s1 = document.getElementById("son1");
let s2 = document.getElementById("son2");
let s3 = document.getElementById("son3");
let s4 = document.getElementById("son4");
let s5 = document.getElementById("son5");
let s6 = document.getElementById("son6");
let s7 = document.getElementById("son7");
let s8 = document.getElementById("son8");
let s9 = document.getElementById("son9");
let sp = document.getElementById("p");
let sw = document.getElementById("winner");


    


/*الاوامر*/

let x ="X";
function game(id){
    
    let el =document.getElementById(id);
        if(x==="X" && el.innerHTML==""){
            el.innerHTML=x;
            x="O";
            sp.innerHTML = x;
        }
    else if(x==="O" && el.innerHTML==""){
        el.innerHTML=x;
            x="X";
            sp.innerHTML = x;
        
    }
        if(s1.innerHTML=="X"&& s2.innerHTML=="X"&& s3.innerHTML=="X"){
            sp.innerHTML = "X is winner 😁";
            s1.style.boxShadow = "0 0 20px #1ae813";
            s2.style.boxShadow = "0 0 20px #1ae813";
            s3.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s1.style.backgroundColor="#1ae813";
            s2.style.backgroundColor="#1ae813";
            s3.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    if(s4.innerHTML=="X"&& s5.innerHTML=="X"&& s6.innerHTML=="X"){
            sp.innerHTML = "X is winner 😁";
            s4.style.boxShadow = "0 0 20px #1ae813";
            s5.style.boxShadow = "0 0 20px #1ae813";
            s6.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s4.style.backgroundColor="#1ae813";
            s5.style.backgroundColor="#1ae813";
            s6.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    if(s7.innerHTML=="X"&& s8.innerHTML=="X"&& s9.innerHTML=="X"){
            sp.innerHTML = "X is winner 😁";
            s7.style.boxShadow = "0 0 20px #1ae813";
            s8.style.boxShadow = "0 0 20px #1ae813";
            s9.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s7.style.backgroundColor="#1ae813";
            s8.style.backgroundColor="#1ae813";
            s9.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    
    
    if(s1.innerHTML=="X"&& s4.innerHTML=="X"&& s7.innerHTML=="X"){
            sp.innerHTML = "X is winner 😁";
            s1.style.boxShadow = "0 0 20px #1ae813";
            s4.style.boxShadow = "0 0 20px #1ae813";
            s7.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s1.style.backgroundColor="#1ae813";
            s4.style.backgroundColor="#1ae813";
            s7.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    if(s2.innerHTML=="X"&& s5.innerHTML=="X"&& s8.innerHTML=="X"){
            sp.innerHTML = "X is winner 😁";
            s2.style.boxShadow = "0 0 20px #1ae813";
            s5.style.boxShadow = "0 0 20px #1ae813";
            s8.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s2.style.backgroundColor="#1ae813";
            s5.style.backgroundColor="#1ae813";
            s8.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    if(s3.innerHTML=="X"&& s6.innerHTML=="X"&& s9.innerHTML=="X"){
            sp.innerHTML = "X is winner 😁";
            s3.style.boxShadow = "0 0 20px #1ae813";
            s6.style.boxShadow = "0 0 20px #1ae813";
            s9.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s3.style.backgroundColor="#1ae813";
            s6.style.backgroundColor="#1ae813";
            s9.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    
    if(s1.innerHTML=="X"&& s5.innerHTML=="X"&& s9.innerHTML=="X"){
            sp.innerHTML = "X is winner 😁";
            s1.style.boxShadow = "0 0 20px #1ae813";
            s5.style.boxShadow = "0 0 20px #1ae813";
            s9.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s1.style.backgroundColor="#1ae813";
            s5.style.backgroundColor="#1ae813";
            s9.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    if(s3.innerHTML=="X"&& s5.innerHTML=="X"&& s7.innerHTML=="X"){
            sp.innerHTML = "X is winner 😁";
            s3.style.boxShadow = "0 0 20px #1ae813";
            s5.style.boxShadow = "0 0 20px #1ae813";
            s7.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s3.style.backgroundColor="#1ae813";
            s5.style.backgroundColor="#1ae813";
            s7.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    
    
    
    if(s1.innerHTML=="O"&& s2.innerHTML=="O"&& s3.innerHTML=="O"){
            sp.innerHTML = "O is winner 😁";
            s1.style.boxShadow = "0 0 20px #1ae813";
            s2.style.boxShadow = "0 0 20px #1ae813";
            s3.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s1.style.backgroundColor="#1ae813";
            s2.style.backgroundColor="#1ae813";
            s3.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    if(s4.innerHTML=="O"&& s5.innerHTML=="O"&& s6.innerHTML=="O"){
            sp.innerHTML = "O is winner 😁";
            s4.style.boxShadow = "0 0 20px #1ae813";
            s5.style.boxShadow = "0 0 20px #1ae813";
            s6.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s4.style.backgroundColor="#1ae813";
            s5.style.backgroundColor="#1ae813";
            s6.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    if(s7.innerHTML=="O"&& s8.innerHTML=="O"&& s9.innerHTML=="O"){
            sp.innerHTML = "O is winner 😁";
            s7.style.boxShadow = "0 0 20px #1ae813";
            s8.style.boxShadow = "0 0 20px #1ae813";
            s9.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s7.style.backgroundColor="#1ae813";
            s8.style.backgroundColor="#1ae813";
            s9.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    
    
    if(s1.innerHTML=="O"&& s4.innerHTML=="O"&& s7.innerHTML=="O"){
            sp.innerHTML = "O is winner 😁";
            s1.style.boxShadow = "0 0 20px #1ae813";
            s4.style.boxShadow = "0 0 20px #1ae813";
            s7.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s1.style.backgroundColor="#1ae813";
            s4.style.backgroundColor="#1ae813";
            s7.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    if(s2.innerHTML=="O"&& s5.innerHTML=="O"&& s8.innerHTML=="O"){
            sp.innerHTML = "O is winner 😁";
            s2.style.boxShadow = "0 0 20px #1ae813";
            s5.style.boxShadow = "0 0 20px #1ae813";
            s8.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s2.style.backgroundColor="#1ae813";
            s5.style.backgroundColor="#1ae813";
            s8.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    if(s3.innerHTML=="O"&& s6.innerHTML=="O"&& s9.innerHTML=="O"){
            sp.innerHTML = "O is winner 😁";
            s3.style.boxShadow = "0 0 20px #1ae813";
            s6.style.boxShadow = "0 0 20px #1ae813";
            s9.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s3.style.backgroundColor="#1ae813";
            s6.style.backgroundColor="#1ae813";
            s9.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    
    
    if(s1.innerHTML=="O"&& s5.innerHTML=="O"&& s9.innerHTML=="O"){
            sp.innerHTML = "O is winner 😁";
            s1.style.boxShadow = "0 0 20px #1ae813";
            s5.style.boxShadow = "0 0 20px #1ae813";
            s9.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s1.style.backgroundColor="#1ae813";
            s5.style.backgroundColor="#1ae813";
            s9.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    if(s3.innerHTML=="O"&& s5.innerHTML=="O"&& s7.innerHTML=="O"){
            sp.innerHTML = "O is winner 😁";
            s3.style.boxShadow = "0 0 20px #1ae813";
            s5.style.boxShadow = "0 0 20px #1ae813";
            s7.style.boxShadow = "0 0 20px #1ae813";
            sw.style.boxShadow = "0 0 20px #1ae813";
            s3.style.backgroundColor="#1ae813";
            s5.style.backgroundColor="#1ae813";
            s7.style.backgroundColor="#1ae813";
            sw.style.backgroundColor="#1ae813";
            setTimeout(function(){location.reload()},3000);
       }
    if(
    s1.innerHTML!==""&&
    s2.innerHTML!==""&&
    s3.innerHTML!==""&&
    s4.innerHTML!==""&&
    s5.innerHTML!==""&&
    s6.innerHTML!==""&&
    s7.innerHTML!==""&&
    s8.innerHTML!==""&&
    s9.innerHTML!==""){sp.innerHTML = "Nobody wins ☹️";setTimeout(function(){location.reload()},3000);}
}

