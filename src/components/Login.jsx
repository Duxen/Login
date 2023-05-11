import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validar el email y la contraseña aquí

        // Simulación de inicio de sesión exitoso para el ejemplo
        const isLoggedIn = email === 'user@example.com' && password === 'password';

        onLogin(isLoggedIn)
    };

    return (
        <div className='container'>
            <h2 className='my-4'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-group">
                <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <button 
                    type="submit" 
                    className='btn btn-primary'
                    disabled={!email || !password}>
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
};

export default Login;