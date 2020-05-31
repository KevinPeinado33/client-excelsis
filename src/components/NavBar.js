import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
            <div className="container">
                <div className="navbar-translate">
                    <Link to={'/'} className="navbar-brand">
                        <img src="https://i.ibb.co/Jm7Xmjs/foto-loguito.png" className="img-logo-principal" alt="img-logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="dropdown nav-item">
                            <a href="!#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i className="material-icons">dashboard</i> Mas Opciones
                            </a>
                            <div className="dropdown-menu dropdown-with-icons">
                                <Link to={'/dashboard'} className="dropdown-item">
                                    <i className="material-icons">home</i> Dashboard
                                </Link>
                                <Link to={'/personas-interesadas'} className="dropdown-item">
                                    <i className="material-icons">forum</i> Interesados
                                </Link>
                                <Link to={'/album-fotos'} className="dropdown-item">
                                    <i className="material-icons">perm_media</i> Album De Fotos
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contactanos'} className="nav-link">
                                <i className="material-icons">supervisor_account</i> Usuarios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/login'} className="nav-link" >
                                <i className="material-icons">account_circle</i> Perfil
                            </Link>
                        </li>
                        {/**
                        <li className="nav-item">
                            <a className="nav-link" rel="noopener noreferrer" data-placement="bottom" href="https://www.facebook.com/C.Excelsis" target="_blank" data-original-title="Like us on Facebook">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" rel="noopener noreferrer" data-placement="bottom" href="https://www.youtube.com/channel/UCM3ukR-wJYnHd1uTIBh02jw" target="_blank" data-original-title="Follow us on Instagram" >
                                <i className="fa fa-youtube"></i>
                            </a>
                        </li>
                        */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;