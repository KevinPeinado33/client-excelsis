import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactoForm from '../components/ContactoForm';

const Contactanos = () => {
    return (
        <div className="profile-page sidebar-collapse">
            <Header />
            <div className="page-header header-filter image-contact-uwu" data-parallax="true" ></div>
            <div className="main main-raised">
                <div className="profile-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ml-auto mr-auto">
                                <div class="profile">
                                        <div class="name" style={{marginTop:20}}>
                                            <h2 class="title">Contáctanos</h2>
                                            <ContactoForm />
                                        </div>
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