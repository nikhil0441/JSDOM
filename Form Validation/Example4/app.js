const myform=document.txtfrm;
const select = myform.lngnamwes;
select.addEventListener("change", (e) => {
  console.log("You selected: " + e.target.value);
});
