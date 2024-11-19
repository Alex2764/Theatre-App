import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { AuthContext  } from '../../context/AuthContext';

const RegisterPage = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

     const registerSubmitHandler = (e) => {
        e.preventDefault(); 
        let { name, userPic, email, password } = Object.fromEntries(new FormData(e.currentTarget));
        
        authService.register(name, userPic, email, password)
            .then(authData => {
                
                login(authData);
                navigate('/ ');
            });

     };

    return (
        <section id="registerPage">
            <form className="registerForm" method="POST" onSubmit={registerSubmitHandler }>
                <h2>Register</h2>

                <div className="on-dark">
                    <label htmlFor="userPic">Name:</label>
                    <input id="userPic" name="userPic" type="text" placeholder="URL" />
                </div>

                <div className="on-dark">
                    <label htmlFor="name">Name:</label>
                    <input id="name" name="name" type="text" placeholder="name" />
                </div>

                <div className="on-dark">
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" />
                </div>

                <div className="on-dark">
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" />
                </div>

                <div className="on-dark">
                    <label htmlFor="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" />
                </div>

                <button className="btn" type="submit">Register</button>

                <p className="field">
                    <span>If you have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>
    )
};
export default RegisterPage;