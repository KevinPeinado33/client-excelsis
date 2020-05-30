import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Login = () => {
    return (
        <>
            <Header />
            <div className="page-header header-filter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 ml-auto mr-auto">
                            <div className="card card-login" style={{height: 330}}>
                                <form className="form" method="" action="">
                                    <div className="card-header card-header-primary text-center">
                                        <h3 className="card-title">Iniciar Sesión</h3>
                                        
                                    </div>
                                    <p className="description text-center">Datos Encriptados</p>
                                    <div className="card-body">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="material-icons">mail</i>
                                                </span>
                                            </div>
                                            <input type="email" className="form-control" placeholder="Correo Electronico" />
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="material-icons">lock_outline</i>
                                                </span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Contraseña" />
                                        </div>
                                    </div>
                                    <div className="footer text-center">
                                        <button href="#pablo" className="btn btn-primary btn-link btn-wd btn-lg">Continuar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;