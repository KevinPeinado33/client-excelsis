import React from 'react';

import ContactoForm from '../Contacto/ContactoForm';

const Contacto = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header card-header-rose">
                        <div className="title">
                            <h3><i className="material-icons">language</i> Escribenos</h3>
                        </div>
                        <p className="category">Rellena Este Formulario Con Tus Datos</p>
                    </div>
                    <div className="card-body">
                        <ContactoForm />
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="title">
                    <h3>Ubicación</h3>
                </div>

            </div>
        </div >
    );
}

export default Contacto;