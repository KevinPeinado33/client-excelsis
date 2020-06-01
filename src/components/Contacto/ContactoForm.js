import React from 'react';

const ContactoForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group mb-4">
                        <div className="input-group">
                            <div className="input-group-prepends">
                                <span className="input-group-text">
                                    <i className="material-icons">assignment_ind</i>
                                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="Apellidos y Nombres Completos" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="form-group mb-4">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="material-icons">contact_phone</i>
                                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="Numero De Telefono" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepends">
                                <span className="input-group-text">
                                    <i className="material-icons">account_balance</i>
                                </span>
                            </div>
                            <textarea class="form-control" placeholder="Descripción De Su Problema o Necesidad" rows="4" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <button className="btn btn-primary btn-round btn-block">
                        Enviar Datos <i className="material-icons">send</i>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ContactoForm;