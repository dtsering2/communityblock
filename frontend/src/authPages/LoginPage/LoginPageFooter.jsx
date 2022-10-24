import React from 'react'
import PrimaryButton from '../../Shared/components/PrimaryButton'
import { Tooltip } from '@mui/material'

const getFormNotValidMessage = () => {
    return 'Enter the correct credentials please.'
}

const getFormValidMessage = () => {
    return "Click to log in!"
}
const LoginPageFooter = ({ handleLogin, isFormValid, navigateToSignUp, navigateToWelcome}) => {
    
    return (
        <>
            <Tooltip
                title = {!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
            >
                <div>
                    <PrimaryButton 
                        label = "Log in"
                        additionalStyles={{marginTop: '30px'}}
                        disabled = {!isFormValid}
                        onClick = {handleLogin}
                    />
                </div>
            </Tooltip>
                <PrimaryButton 
                    label = "Create an account"
                    additionalStyles={{marginTop: '30px'}}
                    onClick = {navigateToSignUp}
                />  
        </>

    )
}

export default LoginPageFooter