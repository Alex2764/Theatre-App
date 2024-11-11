import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../../services/authService';
import { AuthContext } from "../../context/AuthContext";


const Logout = () => {
    const navigate  = useNavigate();
    const { user, logout } = useContext(AuthContext);
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(res => {
                logout(); 
                navigate('/');
            });
    });

     return
};

export default Logout;