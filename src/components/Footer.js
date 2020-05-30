import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
    const [anio, setAnio] = useState(null);

    useEffect(() => {
        const date = new Date();
        setAnio(date.getFullYear());
    }, []);

    return (
        <footer className="footer" data-background-color="black">
            <div className="container">
                <nav className="float-left">
                    <ul>
                        <li>
                            <Link to={'/'}>
                                Excelsis
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contactanos'}>
                                Contáctanos
                            </Link>
                        </li>
                        <li>
                            <Link to={'/publicaciones-noticias'}>
                                Noticias
                            </Link>
                        </li>
                        <li>
                            <Link to={'/login'}>
                                Administador
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="copyright float-right">
                    &copy; {anio}, made with <i className="material-icons">favorite</i> by
                    <a href="https://attomsoft-company.github.io/webpage-attomsoft/" target="_blank" rel="noopener noreferrer"> AttomSoft</a>.
                </div>
            </div>
        </footer>
    );
}

export default Footer;