import React from 'react';
import './topbar.css';
import { NotificationsNone, Settings, Language } from '@mui/icons-material';

function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo"> E.M.S.</span>
                </div>
                <div className="topRight">
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    <div className='topAvatar'>
                      <img src = './image/avatar.png' alt='profile' className='avatar' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Topbar;