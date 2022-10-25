import React, {useState, useEffect} from 'react';
import AuthBox from '../../Shared/components/AuthBox';
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import {validateLoginForm} from '../../Shared/utilities/loginValidator';
import {connect} from "react-redux";
import { getActions } from "../../store/actions/authActions"
import { useNavigate } from 'react-router-dom';


const LoginPage = ({navigateToWelcome, navigateToSignUp, login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  useEffect(()=> {
    setIsFormValid(validateLoginForm({email, password}))
  }, [email, password, setIsFormValid])

  const handleLogin = () =>{
    const userDetails = {
      email,
      password
    }
    login(userDetails, navigate)
  }

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs 
        email = {email}
        setEmail = {setEmail}
        password = {password}
        setPassword = {setPassword}
      />
      <LoginPageFooter 
        isFormValid = {isFormValid}
        handleLogin = {handleLogin}
        navigateToSignUp = {navigateToSignUp}
        navigateToWelcome = {navigateToWelcome}
      />
    </AuthBox>
  )
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}

export default connect(null, mapActionsToProps)(LoginPage)