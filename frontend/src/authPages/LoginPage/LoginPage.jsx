import React, {useState, useEffect} from 'react';
import AuthBox from '../../Shared/components/AuthBox';
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import {validateLoginForm} from '../../Shared/utilities/loginValidator'

const LoginPage = ({navigateToWelcome, navigateToSignUp}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(()=> {
    setIsFormValid(validateLoginForm({email, password}))
  }, [email, password, setIsFormValid])

  const handleLogin = () =>{
    console.log({email, password})
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
}

export default LoginPage