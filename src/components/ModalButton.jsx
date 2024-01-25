import React from "react";

function ModalButton({ openModal }) {
    return (
        <button id="action-bar__add-button" onClick={ openModal }> 
            <i className="fa-solid fa-circle-plus"></i> Tambah catatan
        </button>
    );
}

export default ModalButton;