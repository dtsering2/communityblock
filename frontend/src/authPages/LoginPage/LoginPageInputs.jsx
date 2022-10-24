import React, {useState} from 'react'
import InputWithLabel from '../../Shared/components/InputWithLabel'

const LoginPageInputs = ({email, setEmail, password, setPassword}) => {


    return (
        <>
        <InputWithLabel 
            value = {email}
            setValue = {setEmail}
            label = 'Email'
            type = 'text'
            placeHolder = "Enter email address"
        />
        <InputWithLabel 
            value = {password}
            setValue = {setPassword}
            label = 'password'
            type = 'password'
            placeHolder = "Enter password"
        />
        </>
    )
}

export default LoginPageInputs