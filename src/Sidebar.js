import React from 'react'
import './Sidebar.css'
import {Button, Icon, IconButton} from "@material-ui/core"
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import InboxIcon from '@material-ui/icons/Inbox'
import SidebarOption from "./SidebarOption"
import StarRoundedIcon from '@material-ui/icons/StarRounded'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import SendIcon from '@material-ui/icons/Send'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'

function Sidebar() {

    const dispatch = useDispatch()

    return (
        <div className='sidebar'>
            <Button
                // startIcon={<AddRoundedIcon fontSize='large' />}
                startIcon={<img src='https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png' />}
                className='sidebar__compose'
                onClick={() => dispatch(openSendMessage())}
            >
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected={true} />
            <SidebarOption Icon={StarRoundedIcon} title='Started' number={87} />
            <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={6} />
            <SidebarOption Icon={LabelImportantIcon} title='Important' number={23} />
            <SidebarOption Icon={SendIcon} title='Sent' number={67} />
            <SidebarOption Icon={InsertDriveFileIcon} title='Drafts' number={43} />
            <SidebarOption Icon={ExpandMoreIcon} title='More' number={32} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar