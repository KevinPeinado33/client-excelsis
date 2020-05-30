import React, { useState, useEffect } from 'react';

import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';

import Loading from '../../components/Loading';

const Cuenta = () => {
    const [login, setLogin] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            !user ? setLogin(false) : setLogin(true);
        });        
        // eslint-disable-next-line
    }, []);

    // mostramos el loading de nuestra aplicacion
    if (login === null) return <Loading />;

    return login ? <Redirect to="/dashboard" /> : <Redirect to="/iniciar-sesion"/>;
}

export default Cuenta;