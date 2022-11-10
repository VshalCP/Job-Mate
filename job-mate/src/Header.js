import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { logout } from './features/userSlice'



function Header() {

  const dispatch = useDispatch();


  const logoutOfApp = () => {
     dispatch(logout())
     auth.signOut();
  };
  return (
    <div className="header">

        <div className="h_left">
            <img 
              src="./Images/flickr.png" 
              alt="" 
            />
            <div className='h_sarch'>
                <SearchIcon />
            <input placeholder='Search' type="text" />
            </div>
        </div>

        <div className="h_right">
           <HeaderOption Icon={HomeIcon} title="Home"/>
           <HeaderOption Icon={SupervisorAccountIcon}title="Network"/>
           <HeaderOption Icon={BusinessCenterIcon}title="Jobs"/>
           <HeaderOption Icon={ChatIcon}title="Chat"/>
           <HeaderOption Icon={NotificationsIcon}title="Notifications"/>
           <HeaderOption avatar="https://www.pngall.com/profile-png/download/51576" title="Log_Out" onClick={logoutOfApp} />
        </div>
    </div>
  )
}

export default Header