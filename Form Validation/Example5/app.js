const myform = document.forms["txtform"]; // Select the form by its name
const txtemail = myform.elements["Txtemail"]; // Select the email input field
const span = document.getElementById("error");

txtemail.addEventListener("blur", () => {
  if (!txtemail.value.includes("@")) {
    // Check if the email is invalid
    txtemail.classList.add("invalid");
    span.innerHTML = "Please enter a correct email";
  }
});

txtemail.addEventListener("focus", () => {
  if (txtemail.classList.contains("invalid")) {
    txtemail.classList.remove("invalid");
    span.innerHTML = "";
  }
});
