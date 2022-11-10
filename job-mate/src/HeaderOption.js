import React from 'react'
import './HeaderOption.css'
import { Avatar } from "@material-ui/core"

function HeaderOption({avatar, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className='headerOption'>
       {Icon && <Icon className='headerOption_Icon'/>}
       {avatar && <Avatar className='headerOption_Icon' src={avatar}/>}
       <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}

export default HeaderOption