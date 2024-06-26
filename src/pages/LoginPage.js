import React from 'react';

const LoginPage = () => {
    return ( 
        <div>
            <h1>Panel Administracyjny</h1>
            <br/>
            
            <label>Podaj login
                <input type='text'/>
            </label>
            <label>Podaj hasło
                <input type='pasword'/>
            </label>
            <button>Zaloguj</button>
        </div>
     );
}
 
export default LoginPage;