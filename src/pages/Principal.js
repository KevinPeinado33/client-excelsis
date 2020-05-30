import React from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Noticias from '../components/Noticias';
import Footer from '../components/Footer';

const Principal = () => {
    return (
        <div className="index-page sidebar-collapse">
            <Header />
            <Banner />
            <div className="main main-raised">
                <div className="container">
                    <Noticias />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Principal;