import { useContext  } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { AuthContext  } from '../../context/AuthContext';
import * as authService from '../../services/authService';

const LoginPage = () => {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate(); 

    const onloginHandler = (e) => {
        e.preventDefault();
        
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password  = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);
                
                 navigate('/');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err );
            });

        
    }; 

    return (
        <section id="loginaPage">
            <form className="loginForm" onSubmit={onloginHandler}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" />
                </div>

                <button className="btn" type="submit">Login</button>

                <p className="field">
                    <span>If you don't have profile click <Link to="/register">here</Link></span>
                </p>
            </form>
        </section>
    );
};
export default LoginPage;