var image = document.querySelectorAll(".image img");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var close = document.querySelector(".close");
var galleryImg = document.querySelector(".gallery_iner img");
var gallery = document.querySelector(".gallery");
var currenIndex = 0;
image.forEach((item, index) => {
  item.addEvenListener("click", function () {
    currenIndex = index;
    galleryImg.src = image[currenIndex].src;
    gallery.classList.add("show");
  });
});
close.addEvenListener("click", function () {
  gallery.classList.remove("show");
});
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
});
