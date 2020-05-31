import React, { useEffect, useState } from 'react';

import * as firebase from 'firebase';

import { Redirect, Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Loading from '../components/Loading';
import ListaInteresados from '../components/Contacto/ListaInteresados';

const Interesados = () => {

    const [autenticacion, setAutenticacion] = useState(null);

    useEffect(() => {
        document.title = "Excelsis | Interesados";
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
                                <li className="breadcrumb-item"><Link to={'/dashboard'}>Dashboard</Link></li>
                                <li className="breadcrumb-item active" >Interesados</li>
                            </ol>
                        </nav>
                        <h2 className="title">Interesados</h2>
                        <div className="alert alert-info mb-5">
                            <div className="container">
                                <div className="alert-icon">
                                    <i className="material-icons">info_outline</i>
                                </div>
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true"><i className="material-icons">clear</i></span>
                                </button>
                                <b>Información:</b> A continuación le aparecerá un listado de personas que desean información.
                            </div>
                        </div>
                        <ListaInteresados />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interesados;