import React from "react";

function Modal({ modalDisplay, closeModal, content }) {
    return (
        <div id="modal" style={ modalDisplay }>
            <span id="modal__close-button" onClick={ closeModal }>
                <i className="fa-solid fa-xmark"></i></span>

           { content }
        </div>
    );
}

export default Modal;