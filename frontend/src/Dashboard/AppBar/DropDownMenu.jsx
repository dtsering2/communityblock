import * as React from 'react'
import { useState } from 'react'
import { IconButton } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { logout } from '../../Shared/utilities/auth'

const DropDownMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleMenuOpen = (e)=>{
        setAnchorEl(e.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }
    return (
        <div>
            <IconButton onClick = {handleMenuOpen} style = {{color:'white'}}>
                <MoreVertIcon />
            </IconButton>
            <Menu 
                id ='basic-menu'
                anchorEl = {anchorEl}
                open = {open}
                onClose = {handleMenuClose}
                MenuListProps = {{
                    "aria-labelledby":"basic-button"
                }}
            >
                <MenuItem onClick = {logout}>Logout</MenuItem>
            </Menu>
        </div>


    )
}

export default DropDownMenu