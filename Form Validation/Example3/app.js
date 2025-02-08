const myform = document.getElementById("myform");
const name = document.getElementById("txtname");
const pass = document.getElementById("txtpwd");
const para1 = document.getElementById("paraname");
const para2 = document.getElementById("parapass");

myform.addEventListener("submit", (event) => {
  let isValid = true;

  if (name.value.trim() === "") {
    para1.innerHTML = "Enter Username";
    para1.style.color = "red";
    isValid = false;
  } else {
    para1.innerHTML = "";
  }

  if (pass.value.trim() === "") {
    para2.innerHTML = "Enter Password";
    para2.style.color = "red";
    isValid = false;
  } else {
    para2.innerHTML = "";
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});
