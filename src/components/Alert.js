import React from 'react';

const Alert = ({ type, msg, icon }) => {    
    return (
        <div className={`alert ${type}`}>
            <div className="container">
                <div className="alert-icon">
                    <i className="material-icons">{icon}</i>
                </div>
                <b>{msg}</b>
            </div>
        </div>
    )
}

export default Alert;