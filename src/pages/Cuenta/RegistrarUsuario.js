import React, { useEffect, useState } from 'react';

import * as firebase from 'firebase';

import { Redirect, Link } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import Loading from '../../components/Loading';

const RegistrarUsuario = () => {
    const [autenticacion, setAutenticacion] = useState(null);

    useEffect(() => {
        document.title = "Excelsis | Usuarios";
        firebase.auth().onAuthStateChanged((user) => {
            !user ? setAutenticacion(false) : setAutenticacion(true);
        });
        // eslint-disable-next-line
    }, []);

    if (autenticacion === null) return <Loading isVisible="loading" />;

    if (autenticacion === false) return <Redirect to={'/login'} />

    return (
        <div className="index-page sidebar-collapse">
            <NavBar />
            <div className="main main-raised" style={{ marginTop: 30 }}>
                <div className="container">
                    <div className="section">
                        <nav aria-label="breadcrumb" role="navigation">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={'/dashboard'}>Home</Link></li>
                                <li className="breadcrumb-item"><Link to={'/usuarios-registrados'}>Usuarios Registrados</Link></li>
                                <li className="breadcrumb-item active" >Registro De Usuario</li>
                            </ol>
                        </nav>
                        <h2 className="title">Registrar Nuevo Usuario</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="material-icons">mail</i>
                                        </span>
                                    </div>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Correo Electronico" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrarUsuario;