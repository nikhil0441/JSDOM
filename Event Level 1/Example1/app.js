let x = document.querySelector("#mydiv");

x.onmouseup = () => {
  x.style.backgroundColor = "blue"; // Change background color
  x.style.fontWeight = "800"; // Corrected property name
};

x.onmouseout = () => {
  x.style.backgroundColor = "white"; // Change back to original color
  x.style.fontWeight = "400";
};
