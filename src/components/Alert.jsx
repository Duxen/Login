import React from "react";

const Alert = ({ isLoggedIn }) => {
    return (
        <div>
            <h2>Alert</h2>
            {isLoggedIn ? (
                <p>Sesión iniciada correctamente</p>
            ) : (
                <p>Los datos ingresados no son correctos</p>
            )}
        </div>
    );    
};

export default Alert;