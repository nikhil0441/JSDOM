let x=document.querySelector("#input");
let para=document.querySelector("#para");
x.onkeydown=(e)=>{
   if(e.key<"0" || e.key>"9"){
    // alert("only digits allowed");
    para.innerHTML="only digits allowed"; 
    para.style.color = "lightBlue";
    return false;
   }
   else{
    para.innerHTML="Correct!";
    para.style.color="Blue";
   }
};