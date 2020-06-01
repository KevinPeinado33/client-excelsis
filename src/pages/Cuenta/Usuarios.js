import React, { useEffect, useState } from 'react';

import * as firebase from 'firebase';

import { Redirect, Link, useHistory } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import Loading from '../../components/Loading';
import ListaUsuarios from '../../components/Usuarios/ListaUsuarios';

const Usuarios = () => {

    const history = useHistory();
    const [autenticacion, setAutenticacion] = useState(null);

    useEffect(() => {
        document.title = "Excelsis | Nuevo Usuario";
        firebase.auth().onAuthStateChanged((user) => {
            !user ? setAutenticacion(false) : setAutenticacion(true);
        });
        // eslint-disable-next-line
    }, []);

    if (autenticacion === null) return <Loading isVisible="loading" />;

    if (autenticacion === false) return <Redirect to={'/login'} />

    const registrarNuevoUsuario = () => {
        console.log("registrarNuevoUsuario");
        history.push('/registrar-nuevo-usuario')
    }

    return (
        <div className="index-page sidebar-collapse">
            <NavBar />
            <div className="main main-raised" style={{ marginTop: 30 }}>
                <div className="container">
                    <div className="section">
                        <nav aria-label="breadcrumb" role="navigation">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={'/dashboard'}>Home</Link></li>
                                <li className="breadcrumb-item active" >Usuarios Registrados</li>
                            </ol>
                        </nav>
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="title">Todos Los Usuarios</h2>
                            </div>
                            <div className="col-md-4">
                                <button 
                                    type="button"
                                    className="btn btn-info btn-agregar-usuario btn-round"
                                    data-toggle="tooltip" 
                                    data-placement="bottom" 
                                    title="Agregar Nuevo Usuario"
                                    data-container="body"
                                    onClick={() => registrarNuevoUsuario()}>
                                        Agregar <i className="material-icons">contacts</i>
                                </button>
                            </div>
                        </div>
                        <ListaUsuarios />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usuarios;