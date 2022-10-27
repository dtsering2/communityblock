import { DialogTitle } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import InputWithLabel from "../../Shared/components/InputWithLabel"
import Typography from '@mui/material/Typography'
import React, {useState, useEffect} from 'react'
import {validateEmail} from "../../Shared/utilities/loginValidator"
import PrimaryButton from '../../Shared/components/PrimaryButton'
import {connect} from 'react-redux'
import {getActions} from '../../store/actions/friendsActions'

const AddFriendDialog = ({
    isDialogOpen, 
    closeDialogHandler, 
    sendFriendInvitation = () => {

    }
}) => {
    const [email, setEmail] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    const handleSendInvitation = () => {
        sendFriendInvitation({
            targetEmailAddress: email
        })
    }

    const handleCloseDialog = () => {
        closeDialogHandler();
        setEmail('')
    }

    useEffect(()=>{
        setIsFormValid(validateEmail(email));
    }, [email, setIsFormValid])


    return (
        <div>
            <Dialog open = {isDialogOpen} onClose = {handleCloseDialog}>
                <DialogTitle>
                    <Typography>
                        Invite a friend
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            Enter your friend's email address.
                        </Typography>
                        <InputWithLabel 
                            label = 'Email'
                            type = 'text'
                            value = {email}
                            setValue = {setEmail}
                            placeholder = 'Enter email address'
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <PrimaryButton 
                        onClick = {handleSendInvitation}
                        disabled = {!isFormValid}
                        label = 'Send Invitation'
                        additionalStyles={{
                            marginLeft: '15px',
                            marginRight: '15px',
                            marginBottom: '10px'
                        }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(AddFriendDialog)