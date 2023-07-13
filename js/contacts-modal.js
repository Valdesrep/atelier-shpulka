(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-open]'),
      openModalBtnMob: document.querySelector('[data-open-mob]'),
      closeModalBtn: document.querySelector('[data-close]'),
      modal: document.querySelector('[data-modal-contacts]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtnMob.addEventListener('click', toggleModal);

  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();