import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from "react-router-dom"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import CreateFeed from './pages/CreateFeed';
import Profile from './pages/Profile';
import Communities from './pages/Communities';
import { AuthContext } from './context/AuthContext';
import LogOutNav from './components/LogOutNav';


const App = () => {

  const currentUser = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (


    <>
      {currentUser ? <Navbar /> : <LogOutNav />}
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />

        <Route path='/create-feed' element={<ProtectedRoute><CreateFeed /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/community' element={<ProtectedRoute><Communities /></ProtectedRoute>} />
      </Routes>

    </>
  )
}

export default App