export const Modal = {
    modal: document.querySelector('.modal-wrapper'),
    buttonOpen: document.querySelector('.add-button'),
    buttonClose: document.querySelector('.modal-wrapper button.remove'),

    open() {
        Modal.modal.classList.add("open")
    },

    close() {
        Modal.modal.classList.remove('open')
    }
}

Modal.buttonOpen.onclick = () => {
    Modal.open()
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}
