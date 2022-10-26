import React from 'react';
import { styled } from '@mui/system';
import PendingInvitationsListItem from './PendingInvitationsListItem';
const TEST = [ 
    {
        _id: '1',
        senderId: {
            username: 'Mark',
            email: 'abc@abc.com'
        }
    },
    {
        _id: '2',
        senderId: {
            username: 'John',
            email: 'abcd@abcd.com'
        }
    },

]

const MainContainer = styled('div')({
    width: "100%",
    height: "22%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto"
})

const PendingInvitationsList = () => {
    return (
        <MainContainer>
            {TEST.map(i=>(
                <PendingInvitationsListItem 
                    key = {i._id}
                    id = {i.id}
                    username = {i.senderId.username}
                    email = {i.senderId.email}
                />
            ))}
        </MainContainer>
    )
}

export default PendingInvitationsList