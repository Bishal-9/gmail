import React from 'react'
import './Header.css'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import {Avatar, IconButton} from "@material-ui/core"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded'
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'

function Header() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut = () => {
        auth
            .signOut()
            .then(() => {
                dispatch(logout())
            })        
    }

    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuRoundedIcon />
                </IconButton>

                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""/>
            </div>

            <div className="header__middle">
                <IconButton>
                    <SearchRoundedIcon />
                </IconButton>
                <input type="text" placeholder='Search mail' />
                <ArrowDropDownRoundedIcon className='header__inputCaret' />
            </div>

            <div className="header__right">
                <IconButton>
                    <HelpOutlineRoundedIcon />
                </IconButton>
                <IconButton>
                    <SettingsRoundedIcon />
                </IconButton>
                <IconButton>
                    <AppsRoundedIcon />
                </IconButton>
                <Avatar 
                    src={user?.photoUrl} 
                    onClick={signOut}
                />
            </div>
        </div>
    )
}

export default Header