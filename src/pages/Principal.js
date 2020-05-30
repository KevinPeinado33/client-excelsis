import React from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Noticias from '../components/Noticias';

const Principal = () => {
    return (
        <>
            <Header />
            <Banner />
            <div className="main main-raised">
                <div className="container">
                    <Noticias />
                </div>
            </div>
        </>
    )
}

export default Principal;