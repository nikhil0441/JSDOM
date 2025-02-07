const myform = document.Addition;
const x = myform.txtfno;
const y = myform.txtsno;
const z = myform.resno;
const add = myform.addbtn;
const clear = myform.clearbtn;
add.addEventListener("click",()=>{
    if(x.value==="" || y.value===""){
        alert("please input Numbers");
        return;
    }
   z.value=Number(x.value)+Number(y.value);
});
clear.addEventListener("click",()=>{
x.value=y.value=z.value="";
x.focus();
});