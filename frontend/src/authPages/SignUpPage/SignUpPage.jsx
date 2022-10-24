import { Typography } from '@mui/material';
import React, { useState , useEffect} from 'react'
import AuthBox from '../../Shared/components/AuthBox';
import SignUpPageFooter from './SignUpPageFooter';
import SignUpPageInputs from './SignUpPageInputs';
import { validateSignUpForm } from '../../Shared/utilities/signUpValidator';

const SignUpPage = ({navigateToWelcome, navigateToLogin}) => {
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(()=> {
    setIsFormValid(validateSignUpForm({email, password, username, confirmPassword}))
  }, [email, password, username, confirmPassword, setIsFormValid])

  const handleSignUp = () => {
    console.log({email, username, password, confirmPassword})
  }

  return (
    <AuthBox> 
      <Typography variant = 'h5' sx = {{ color: "white"}}>Create an account</Typography>
      <SignUpPageInputs 
        email = {email}
        setEmail = {setEmail}
        username = {username}
        setUsername = {setUsername}
        password = {password}
        setPassword = {setPassword}
        confirmPassword = {confirmPassword}
        setConfirmPassword = {setConfirmPassword}
      />
      <SignUpPageFooter 
        isFormValid={isFormValid}
        handleSignUp = {handleSignUp}
        navigateToWelcome = {navigateToWelcome}
        navigateToLogin = {navigateToLogin}
      />
    </AuthBox>
  )
}

export default SignUpPage