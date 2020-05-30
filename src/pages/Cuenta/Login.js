import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';
import Loading from '../../components/Loading';
import Alert from '../../components/Alert';

const Login = () => {

    const [visible, setVisible] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const [loading, setLoading] = useState('');

    useEffect(() => {
        document.title = "Excelsis | Login";
    });

    const cambiarEstado = (estado, msg) => {
        setVisible(estado);
        setMensaje(msg);
    }


    return (
        <div className="login-page sidebar-collapse">
            <Header />
            <div className="page-header header-filter imagen-atras">
                <div className="container">

                    { visible ? <Alert type="alert-danger" msg={mensaje} icon="error_outline" /> : null}
                    
                    <div className="row">

                        <div className="col-lg-4 col-md-6 ml-auto mr-auto">
                            <div className="card card-login" style={{ height: 330 }}>

                                <div className="card-header card-header-primary text-center">
                                    <h3 className="card-title">Iniciar Sesión</h3>

                                </div>
                                <p className="description text-center">Datos Encriptados</p>
                                <LoginForm cambiarEstado={cambiarEstado} setLoading={setLoading}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loading isVisible={loading}/>
            <Footer />
        </div>
    )
}

export default Login;