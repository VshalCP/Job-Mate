import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sider.css'

function Sider() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sider_recent">
            <span className="sider_hash">#</span>
            <p>{topic}</p>
        </div>
    );


  return (
    <div className="sider">
        <div className="sider_top">
            <img src="./Images/xpark.jpg" alt="" />
            <Avatar src={user.photoUrl} className="sider_avatar" />
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sider_states">
            <div className="sider_stat">
               <p>Who Viewed profile</p>
               <p className="sider_statenumber">256</p>
            </div>
            <div className="sider_stat">
               <p>Views on Post</p>
               <p className="sider_statenumber">404</p>
            </div>
        </div>
        <div className="sider_bottom">
            <p>Recent</p>
            {recentItem("Jobs")}
            {recentItem("Layoffs")}
            {recentItem("DSA")}
            {recentItem("Development")}
            {recentItem("Programming")}
            {recentItem("Salaryhike")}
            {recentItem("Hackathons")}
        </div>
    </div>
  );
}

export default Sider;