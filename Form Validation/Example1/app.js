const myform=document.myform;
const name=myform.txtname;
const pwd=myform.txtpwd;
const btn=myform.btnsubmit;
btn.addEventListener("click",(e)=>{
    alert("username:"+name.value+"password:"+pwd.value);
    return;
});