import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const isAuth = (Component) => {
    const WrapperComponent = (props) => {
        
        const { isAuthenticated, user } = useAuth();
        // const navigate = useNavigate();

        // if(isAuthenticated){
        //     navigate('/login');
        
        //     return null; 
        //     //? when user click on current navbar link the peage will redner
        //     //? and current component will render very fast but we don't want render
        //     //? To fix this return null;
        //     //? or
        // }

        return isAuthenticated
            ? <Component {...props} user={user.name}/> //? !!Get user info!!!
            : <Navigate to='/login'/>;
        // return(
        //     <Component {...props} />
        // ) 
    };
    return(WrapperComponent);
};