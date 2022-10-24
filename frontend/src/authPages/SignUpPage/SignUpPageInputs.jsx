import React from 'react'
import InputWithLabel from '../../Shared/components/InputWithLabel';

const SignUpPageInputs = (props) => {
    const { email, setEmail, username, setUsername, password, setPassword, confirmPassword, setConfirmPassword} = props;
    return (
        <>
        <InputWithLabel 
            value = {email}
            setValue = {setEmail}
            label = 'Email address'
            type = "text"
            placeHolder = "Enter email address"
        />
        <InputWithLabel 
            value = {username}
            setValue = {setUsername}
            label = 'Username'
            type = "text"
            placeHolder = "Enter username"
        />
        <InputWithLabel 
            value = {password}
            setValue = {setPassword}
            label = 'Password'
            type = "password"
            placeHolder = "Enter your password"
        />
        <InputWithLabel 
            value = {confirmPassword}
            setValue = {setConfirmPassword}
            label = 'Confirm Password'
            type = "password"
            placeHolder = "Re-enter your password"
        />
        </>
    )
}

export default SignUpPageInputs