let menuicon = document.querySelector("#icon");
let navbar = document.querySelector(".navbar");
let section = document.querySelector("section");

menuicon.onclick = () => {
  menuicon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};


