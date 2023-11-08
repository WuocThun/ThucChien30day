var eCode = document.querySelector(".card.key :last-child");
var eLocation = document.querySelector(".card.location :last-child");
var eWhich = document.querySelector(".card.which :last-child");
var eKey = document.querySelector(".card.code :last-child");
var alert = document.querySelector(".alert");
var box = document.querySelector(".box");
var reslut = document.querySelector(".result");
document.addEventListener("keydown", (e) => {
//   eLocation.innerHTML = e.location;
  eKey.innerHTML = e.key;
    eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;
  reslut.innerHTML = e.code;
  alert.classList.add("hide");
  box.classList.remove("hide");
});
