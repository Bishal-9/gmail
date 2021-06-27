import React from 'react'
import './Mail.css'
import {IconButton} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import ReportIcon from '@material-ui/icons/Report'
import DeleteIcon from '@material-ui/icons/Delete'
import EmailIcon from '@material-ui/icons/Email'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import LabelIcon from '@material-ui/icons/Label'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PrintIcon from '@material-ui/icons/Print'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function Mail() {

    const history = useHistory()
    const selectedMail = useSelector(selectOpenMail)

    return (
        <div className='mail'>
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.push('/')} >
                        <ArrowBackOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ReportIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <OpenInNewIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className='mail__important' />
                    <p>{selectedMail?.title}</p>
                    <p className='mail__time'>{selectedMail?.time}</p>
                </div>
                <div className="mail__message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail