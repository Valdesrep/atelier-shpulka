(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-feedback]"),
    closeModalBtn: document.querySelector("[data-close-feedback]"),
    modal: document.querySelector("[data-modal-feedback]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
