import React, { useState } from 'react';


const Modal = () => {
    const [isOpenModal, setOpenModal] = useState(false);

    const openModal = () => {
        setOpenModal(true);
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <div className="modal">
            <button onClick={openModal}>Open Modal</button>
            {isOpenModal && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <h2>Modal Content</h2>
                        <p>This is the content</p>
                        <button onClick={closeModal}>Close Modal</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal;