import React, { useEffect, useState } from 'react';

import * as firebase from 'firebase';

import { useHistory, Redirect } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Loading from '../components/Loading';

const Dashboard = () => {

    const history = useHistory();
    const [autenticacion, setAutenticacion] = useState(null);

    useEffect(() => {
        document.title = "Excelsis | Dashboard";
        firebase.auth().onAuthStateChanged((user) => {
            !user ? setAutenticacion(false) : setAutenticacion(true);
        });
        // eslint-disable-next-line
    }, []);

    if (autenticacion === null) return <Loading isVisible="loading" />;

    if (autenticacion === false) return <Redirect to={'/login'} />

    const cerrarSesion = () => {
        firebase.auth().signOut();
        history.push('/login');
    }

    return (
        <div className="index-page sidebar-collapse">
            <NavBar />
            <div className="main main-raised" style={{ marginTop: 30 }}>
                <div className="container">
                    <div className="section">
                        <nav aria-label="breadcrumb" role="navigation">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">Home</li>
                            </ol>
                        </nav>
                        <h2 className="title">Dashboard</h2>
                        <button className="btn btn-danger" onClick={() => cerrarSesion()}>Cerrar Sesion</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;