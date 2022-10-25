import React from 'react'
import PrimaryButton from '../../Shared/components/PrimaryButton'

const additionalStyles = {
    marginTop: '10px',
    marginLeft: '5px',
    width: '80%',
    height: "30px",
    background: '#3ba55d'
}

const AddFriendButton = () => {
    const handleOpenAddFriendDialog = () => {};
    return (
        <>
            <PrimaryButton 
                additionalStyles={additionalStyles}
                label = "Add Friend"
                onClick = {handleOpenAddFriendDialog}
            />
        </>
    )
}

export default AddFriendButton