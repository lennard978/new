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