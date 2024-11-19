import { createContext, useState } from "react";
import useLocalStorage from '../hooks/useLocalStorage';


export const AuthContext = createContext();


const initialState = {
    email: '',
    _id: '',   
    accessToken: '', 
  };

  
export const AuthProvider = ({
    children
}) => {
    
    const [user , setUser ] = useLocalStorage ('user', initialState )
    
    const login = (authData) => {
        setUser (authData);
    }; 

    const logout = () => {
        // TODO: logout
        setUser(initialState);
     };

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};