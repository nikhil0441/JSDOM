// Ensure the script runs after the page loads
window.onload = () => {
  let x = document.querySelector("#myImage"); // Select by ID for better performance

  x.onmouseup = () => {
    x.src = "/Event Level 1/Example2/images/download (4).jpeg";
    x.style.width = "300";
  };

  x.onmouseout = () => {
    x.src = "/Event Level 1/Example2/images/download (3).jpeg";
  };
};
