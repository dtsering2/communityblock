import React from 'react';
import './App.css';
import { Route, Routes, useNavigate} from "react-router-dom";

import WelcomePage from './WelcomePage';
import SignUpPage from './authPages/SignUpPage/SignUpPage';
import LoginPage from './authPages/LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';

function App() {

  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signup")
  }
  const navigateToWelcome = () => {
    navigate("/")
  }
  const navigateToLogin = () => {
    navigate("/login")
  }
  return (
    <>
      <Routes>
        <Route path = "/" element = { <WelcomePage navigateToSignUp = {navigateToSignUp} navigateToLogin = {navigateToLogin}/> } />
        <Route path = "/signup" element = { <SignUpPage navigateToWelcome = {navigateToWelcome} navigateToLogin = {navigateToLogin}/> }/>
        <Route path = "/login" element = { <LoginPage navigateToWelcome = {navigateToWelcome} navigateToSignUp = {navigateToSignUp}/> }/>
        <Route path = "/dashboard" element = { <Dashboard /> } />
      </Routes> 
    </>
  );
}

export default App;
