import React from 'react';

const ListaUsuarios = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-header card-header-icon card-header-info">
                                <h4 className="card-title">
                                    <i className="material-icons">account_circle</i> Emma Watson
                                </h4>
                                <button 
                                    type="button"
                                    className="btn btn-danger btn-acciones"
                                    data-toggle="tooltip" 
                                    data-placement="bottom" 
                                    title="Eliminar Usuario"
                                    data-container="body">
                                        <i className="material-icons">delete_forever</i>
                                </button>
                                <button 
                                    type="button"
                                    className="btn btn-warning btn-acciones"
                                    data-toggle="tooltip" 
                                    data-placement="bottom" 
                                    title="Editar Datos De Este Usuario"
                                    data-container="body">
                                        <i className="material-icons">edit</i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Datos Del Usuario</h4>
                        <p>Formulario Del Usuario</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-header card-header-icon card-header-info">
                                <h4 className="card-title">
                                    <i className="material-icons">account_circle</i> Will Smith
                                </h4>
                                <button className="btn btn-danger btn-acciones"><i className="material-icons">delete_forever</i></button>
                                <button className="btn btn-warning btn-acciones"><i className="material-icons">edit</i></button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Datos Del Usuario</h4>
                        <p>Formulario Del Usuario</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ListaUsuarios;