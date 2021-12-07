"use strict";

const showModal = document.querySelectorAll(".show-modal");
const hiddenModal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const closeOverlay = document.querySelector(".overlay");

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", modal);
  closeModal.addEventListener("click", close);
  closeOverlay.addEventListener("click", overlay);

  function modal() {
    if (hiddenModal.classList.contains("hidden")) {
      hiddenModal.classList.remove("hidden");
      closeOverlay.classList.remove("hidden");
    }
  }
  function close() {
    if (!hiddenModal.classList.contains("hidden")) {
      hiddenModal.classList.add("hidden");
      closeOverlay.classList.add("hidden");
    }
  }

  function overlay() {
    if (!hiddenModal.classList.contains("hidden")) {
      hiddenModal.classList.add("hidden");
      closeOverlay.classList.add("hidden");
    }
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!hiddenModal.classList.contains("hidden")) {
      hiddenModal.classList.add("hidden");
      closeOverlay.classList.add("hidden");
    }
  }
});
