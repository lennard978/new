// Select the button
const btn = document.querySelector(".changeMode");
const body = document.querySelector("body");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    btn.textContent = "light";
    btn.style.color = "#2cb67d";
  } else {
    btn.textContent = "dark";
    btn.style.color = "#e55812";
  }
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

const openBtn = document.querySelectorAll(".open");

openBtn.forEach(element => {
  element.addEventListener("click", function(){
    const element2 = element.closest("section");
    if(element.classList.contains("fa-plus")){
      element.classList.remove("fa-plus");
      element.classList.add("fa-minus");
    } else {
      element.classList.remove("fa-minus");
      element.classList.add("fa-plus");
    }
    element2.querySelector(".content").classList.toggle("slide");
  });
});
