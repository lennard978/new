// Select the button
const btn = document.querySelector(".changeMode");
const body = document.querySelector("body");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    btn.textContent = "light";
    btn.style.color = "white";
  } else {
    btn.textContent = "dark";
    btn.style.color = "black";
  }
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
