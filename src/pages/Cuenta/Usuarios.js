import React, { useEffect, useState } from 'react';

import * as firebase from 'firebase';

import { Redirect, Link } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import Loading from '../../components/Loading';
import ListaUsuarios from '../../components/Usuarios/ListaUsuarios';
import Modal from '../../components/Modal';

const Usuarios = () => {

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
                                    data-toggle="modal"
                                    data-target="#modalRegistroUsuario">
                                    Agregar <i className="material-icons">contacts</i>
                                </button>
                            </div>
                        </div>
                        <ListaUsuarios />

                    </div>
                </div>
            </div>


            {/** modal */}

            <Modal isVisible='modalRegistroUsuario' />
            
        </div>
    )
}

export default Usuarios;