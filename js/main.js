const lightBtn = document.querySelector(".light");
const header = document.querySelector("header");
var r = document.querySelector(":root");

// function myFunction_get() {
//   var rs = getComputedStyle(r);
//   console.log(rs.getPropertyValue("--global"));
// }
function light() {
  r.style.setProperty("--global", "white");
  r.style.setProperty("--firstChild", "white");
  r.style.setProperty("--h2p", "white");
  r.style.setProperty("--h1", "white");
}
function dark() {
  r.style.setProperty("--global", "black");
  r.style.setProperty("--firstChild", "hsla(0, 0%, 30%, 0.9)");
  r.style.setProperty("--h2p", "hsla(0, 0%, 20%, 0.795)");
  r.style.setProperty("--h1", "hsl(0, 0%, 9%)");
}

lightBtn.addEventListener("click", function(){
  header.classList.toggle("change");
  
  if(header.classList.contains("change")){
    lightBtn.textContent = "dark";
    lightBtn.style.color = "white";
    light();
  }else{
    lightBtn.textContent = "light";
    lightBtn.style.color = "black";
    dark();
  }
});
