import React from 'react';

import RegistroUsuarioForm from './Usuarios/RegistroUsuarioForm';

const Modal = ({ isVisible }) => {
    return (
        <div className="modal fade" id={isVisible} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">

                    <RegistroUsuarioForm />

                </div>
            </div>
        </div>
    )
}

export default Modal;