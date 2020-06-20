import React, { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacto from '../components/Contacto/Contacto';

const Contactanos = () => {

    useEffect(() => {
        document.title = "Excelsis | Contáctanos"
    }, []);

    return (
        <div className="profile-page sidebar-collapse">
            <Header />
            <div className="page-header header-filter image-contact-uwu" data-parallax="true" ></div>
            <div className="main main-raised">
                <div className="profile-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ml-auto mr-auto">
                                <div className="profile">
                                        <div className="name" style={{marginTop:20}}>
                                            <h2 className="title">Contáctanos y Ubicanos</h2>
                                        </div>
                                        <Contacto />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
        </div>
    );
}

export default Contactanos;