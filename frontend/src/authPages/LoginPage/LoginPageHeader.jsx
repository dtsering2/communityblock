import React from 'react';
import { Typography } from '@mui/material';

const LoginPageHeader = () => {
    return (
        <>
            <Typography variant = 'h5' sx = {{color: 'white',fontFamily: 'Raleway, Arial'}}>
                Welcome Back!
            </Typography>
            <Typography sx= {{color : "#b9bbbe"}}>
                We are happy to have you today, as always!
            </Typography>
        </>
    )
}

export default LoginPageHeader