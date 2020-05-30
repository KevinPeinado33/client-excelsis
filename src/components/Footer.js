import React, { useState, useEffect } from 'react';

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
                            <a href="https://www.creative-tim.com/" target="_blank" rel="noopener noreferrer">
                                Creative Tim
                            </a>
                        </li>
                        <li>
                            <a href="https://www.creative-tim.com/presentation" target="_blank" rel="noopener noreferrer">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="https://www.creative-tim.com/blog" target="_blank" rel="noopener noreferrer">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="https://www.creative-tim.com/license" target="_blank" rel="noopener noreferrer">
                                Licenses
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="copyright float-right">
                    &copy; {anio}, made with <i className="material-icons">favorite</i> by
                    <a href="https://www.creative-tim.com/" target="_blank" rel="noopener noreferrer"> AttomSoft</a>.
                </div>
            </div>
        </footer>
    );
}

export default Footer;