// Select the button
const btn = document.querySelector(".changeMode");
const body = document.querySelector("body");
const header = document.querySelector("header");

// btn.textContent = "light";
// Listen for a click on the button
btn.addEventListener("click", function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    btn.textContent = "dark";
    btn.style.color = "white";
    header.style.backgroundImage = "none";
    header.style.backgroundColor = "black";
  } else {
    btn.textContent = "light";
    btn.style.color = "black";
    header.style.backgroundImage = "url(\"../images/paper-flower-background-4881104_1920.jpg\")";
  }
});