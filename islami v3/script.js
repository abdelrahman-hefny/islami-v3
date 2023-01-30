let btnUp = document.getElementById("btnUp");
let open = document.getElementById("open");
let close = document.getElementById("close");
let menu = document.getElementById("menu");
// start menu
function closee() {
  open.classList.add("im");
  close.classList.remove("im");
  menu.classList.remove("im");
}
function closeee() {
  close.classList.add("im");
  open.classList.remove("im");
  menu.classList.add("im");
}

// end menu

//start scroll
btnUp.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.onscroll = function () {
  if (scrollY >= 400) {
    btnUp.classList.remove("im");
  } else {
    btnUp.classList.add("im");
  }
};
// end scroll
