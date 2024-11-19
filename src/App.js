import './App.css';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import Header from './components/Header';
import WelcomePage from './components/WelcomPage/WelcomePage';
import CreatePage from './components/CreatePage/CreatePage';
import DetailPage from './components/DetailPage/DetailPage'
import EditPage from './components/EdditPage/EdditePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import LogoutPage from './components/LogoutPage/LogoutPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {

  return (
    <AuthProvider>
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

      </div>
    </AuthProvider>
  );
}

export default App;
