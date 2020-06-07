import React, { useState } from 'react';

import { size, isEmpty } from 'lodash';
import { validateEmail } from '../../utils/validation';
import * as firebase from 'firebase';
import Swal from 'sweetalert2';

import Alert from '../Alert';

const RegistroUsuarioForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [loading, setLoading] = useState(false);

    const registrarUsuario = e => {
        e.preventDefault();
        if (isEmpty(email) || isEmpty(password) || isEmpty(repeatPassword)) {
            setAlert(true);
            setMensaje('Campos Obligatorios');
        } else if (!validateEmail(email)) {
            setAlert(true);
            setMensaje('Asegurate Que El Correo Tenga Un @ y/o .');
        } else if (password !== repeatPassword) {
            setAlert(true);
            setMensaje('Las Contraseñas Tienen Que Ser Iguales');
        } else if (size(password) < 6) {
            setAlert(true);
            setMensaje('La Contraseña Tiene Que Tener Minimo 6 Caracteres');
        } else {
            setAlert(false);
            setMensaje('');
            setLoading(true);
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(response => {
                    setEmail('');
                    setPassword('');
                    setRepeatPassword('');
                    setLoading(false);
                    Swal.fire(
                        'Buen Trabajo!',
                        'Has Creado Un Nuevo Usuario Con Exito!',
                        'success'
                    );
                })
                .catch(() => {
                    setAlert(true);
                    setMensaje('Opss..!, Un Error Intentelo Mas Tarde');
                    setLoading(false);
                });
        }
    }

    const cerrarModal = () => {
        setEmail('');
        setPassword('');
        setRepeatPassword('');
        setAlert(false);
        setMensaje('');
    }

    return (
        <form onSubmit={registrarUsuario}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Registrar Nuevo Usuario</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">

                {alert ? <Alert type="alert-warning" msg={mensaje} icon="error_outline" /> : null}

                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="material-icons">alternate_email</i>
                                </span>
                            </div>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo Electronico"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="material-icons">lock</i>
                                </span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Correo Electronico"
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="material-icons">lock</i>
                                </span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Correo Electronico"
                                value={repeatPassword}
                                onChange={e => setRepeatPassword(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={() => cerrarModal()}>Cerrar</button>

                {!loading ?
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Crear <i className="material-icons">save</i>
                    </button>
                    :
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled>
                        Espere Un Momento ... <i className="material-icons">cached</i>
                    </button>
                }


            </div>
        </form>
    );
}

export default RegistroUsuarioForm;