import React from 'react';

import ContactoForm from '../Contacto/ContactoForm';

const Contacto = () => {
    return (
        <>
            <div className="row mb-4">
                <div className="col-md-12">
                    <div className="title">
                        <h3>Ubicación</h3>
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            title="miUbicacion"
                            className="embed-responsive-item"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.3469376969033!2d-79.90876205852466!3d-6.704815411525975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ced920583e035%3A0xe2480f3e7d674bac!2sExcelsis!5e0!3m2!1ses!2sit!4v1583389402149!5m2!1ses!2sit"
                            style={{ border: 0 }} />
                    </div>
                </div>
            </div>
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

                <div className="col-md-6 mb-5">
                    <h2>Consultas</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <ul className="nav nav-pills nav-pills-icons flex-column" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#telefono-2" role="tab" data-toggle="tab">
                                        <i className="material-icons">perm_phone_msg</i>
                                        Telefono
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#correo-2" role="tab" data-toggle="tab">
                                        <i className="material-icons">contact_mail</i>
                                        Correo
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#ubicacion-2" role="tab" data-toggle="tab">
                                        <i className="material-icons">location_on</i>
                                        Ubicación
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content">
                                <div className="tab-pane active" id="telefono-2">
                                    <p>Numero de telegono y su descripción</p>
                                </div>
                                <div className="tab-pane" id="correo-2">
                                    <p>Correro electronico y su descripción</p>
                                </div>
                                <div className="tab-pane" id="ubicacion-2">
                                    <p>Ubicación y su descripción</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacto;