import React from 'react';

import * as firebase from 'firebase';

const Dashboard = () => {
    return(
        <>
        <p>Dashboard...!!</p>
        <button className="btn btn-danger" onClick={() => firebase.auth().signOut() }>Cerrar Sesion</button>
        </>
    )
}

export default Dashboard;