import { createContext, useContext } from "react";


import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();


const initialState = {
    email: '',
    _id: '',   
    accessToken: '', 
  };

// const reducer = (state, action) => {
    
//     return state;
// };

  
export const AuthProvider = ({
    children
}) => {
    
    const [user , setUser ] = useLocalStorage ('user', initialState )
    // const [user, dispatch] = useReducer(reducer, initialState )
    
    const login = (authData) => {
        setUser (authData);

        // dispatch(email);
    }; 

    const logout = () => {
        // TODO: logout
        setUser(initialState);
     };

    return(
        <AuthContext.Provider value={{user, login, logout, isAuthenticated: Boolean(user.email)}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const authState = useContext(AuthContext);
    
    return authState;
};