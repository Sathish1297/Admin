import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'> 
            <div className='topLeft'>
                <span className='logo'>Mr.Admin</span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <NotificationsNoneIcon/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <LanguageIcon/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <SettingsIcon/>
                </div>
                <img className='topAvatar' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='profile'></img>
            </div>
        </div>
    </div>
  )
}
