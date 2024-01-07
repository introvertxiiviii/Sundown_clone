const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

// var a = document.querySelector(".elem");
// console.log(a);
// var abc = a.getAttribute("class");
// console.log(abc);

var elemC = document.querySelector("#elem-container");
var fixedimage = document.querySelector("#fixedimge");
elemC.addEventListener("mouseenter", function () {
  fixedimage.style.display = "block";
});

elemC.addEventListener("mouseleave", function () {
  fixedimage.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixedimage.style.backgroundImage = `url(${image})`;
  });
});
