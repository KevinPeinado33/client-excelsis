import React, { useState } from 'react';

import * as firebase from 'firebase';

import { isEmpty } from 'lodash';
import { validateEmail } from '../utils/validation';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ cambiarEstado, setLoading }) => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const guardarDatos = e => {
        e.preventDefault();
        if(isEmpty(email) || isEmpty(password)) {            
            cambiarEstado(true, "El Formulario Esta Vacio, Debe Ingresar Datos");
        } else if(!validateEmail(email)) {
            cambiarEstado(true, "Correo Electronico Mal Escrito");
        } else {
            cambiarEstado(false, "");
            setLoading('loading');
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    setLoading('');
                    history.push('/login');
                }).catch(() => {
                    setLoading('');
                    cambiarEstado(true, "Correo Electronico o Contraseña Incorrectos, Intentelo De nuevo");
                    setEmail('');
                    setPassword('');
                })
        }
    }

    return (
        <form onSubmit={guardarDatos}>
            <div className="card-body">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="material-icons">mail</i>
                        </span>
                    </div>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Correo Electronico"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="material-icons">lock_outline</i>
                        </span>
                    </div>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Contraseña" 
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="footer text-center">
                <button type="submit" className="btn btn-primary btn-link btn-wd btn-lg">Continuar</button>
            </div>
        </form>
    )
}

export default LoginForm;