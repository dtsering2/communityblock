import React from 'react'
import PrimaryButton from '../../Shared/components/PrimaryButton'
import { Tooltip } from '@mui/material'

const SignUpPageFooter = ({handleSignUp, isFormValid, navigateToWelcome,navigateToLogin}) => {
    const getFormNotValidMessage = () => {
        return "Seems like one of your inputs are wrong. Please check the following:  1. Your email should be a valid email address., 2. Password should be at least of length 8. Your password should also include at least 1 uppercase character, 1 lowercase character, 1 number, and 1 special character., 3. Your username should be at least 6 characters long and at maximum 20 character in length., 4. Your password and confirm password inputs must be the same as well. "
    }
    
    const getFormValidMessage = () => {
        return "Click to create an account!"
    }

    return (
        <>
        <Tooltip
            title = {!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
            <div>
                <PrimaryButton 
                    label = "Sign Up"
                    additionalStyles={{marginTop: '30px'}}
                    disabled = {!isFormValid}
                    onClick = {handleSignUp}
                />
            </div>
        </Tooltip>
            <PrimaryButton 
                label = "Go to login"
                additionalStyles={{marginTop: '10px'}}
                onClick = {navigateToLogin}
            />  
    </>
    )
}

export default SignUpPageFooter