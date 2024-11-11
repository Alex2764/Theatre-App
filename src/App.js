import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';

import { AuthContext } from './context/AuthContext';

import Header from './components/Header';
import WelcomePage from './components/WelcomPage/WelcomePage';
import CreatePage from './components/CreatePage/CreatePage';
import DetailPage from './components/DetailPage/DetailPage'
import EditPage from './components/EdditPage/EdditePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import LogoutPage from './components/LogoutPage/LogoutPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { login, logout } from './services/authService';
   

const initialState = {
  email: '',
  _id: '',   
  accessToken: '', 
};

function App() {

  const [user , setUser ] = useLocalStorage ('user', initialState )

  const login = (authData) => {
    setUser (authData);
  }; 

  const logout = () => {
    // TODO: logout
    setUser(initialState);
  };

  return (
    <AuthContext.Provider value={{user,  login, logout}}>
      <div id="container">

        <Header />

        <main id="content">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/create-page" element={<CreatePage />} />
            <Route path="/theaters/:theatreId" element={<DetailPage />} />
            <Route path="/edit-page" element={<EditPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/profile-page" element={<ProfilePage />} />
          </Routes>
        </main>

        <footer>
          <div>© 2021
            <h3>JS Application</h3>
          </div>
        </footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
