var btnOpen = document.querySelector(".open-modal-btn");
var modal = document.querySelector(".modal");
var iconClose = document.querySelector(".modal-header i");
var btnClose = document.querySelector(".modal_fotter button");
function toggleModal(e) {
  modal.classList.toggle("hide");
}
btnOpen.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
modal.addEventListener("click", function () {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});
