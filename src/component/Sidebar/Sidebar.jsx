import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from "../../assets/assets.js"

const Sidebar = () => {
  const [extended,setExtended]= useState(false);
  return (
   <div className='sidebar' >
      <div className="top">

        <div className="menu">
          <img onClick={()=>setExtended(prev=>!prev)}src={assets.menu_icon} alt="" />

        </div>

        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ?<p>New Chat</p>:null}
        </div>
          {extended ?<div className="recent-chat">
          <div className="rc-heading">
            <p>Recent</p>
          </div>

          <div className="rc-container">
            <img src={assets.message_icon} alt="" />
            <p>what is  react.....</p>
          </div>
          <div className="rc-container">
            <img src={assets.message_icon} alt="" />
            <p>what is  react...     gfgghghsggsgggsgkfhgfdhgahjgkjhgdhjdashhdfgadjhdjhdfjhgdagdjhdah</p>
          </div>
        </div>:null}
        
        

      </div>
      <div className="bottom">
        <div className="help icon">
          <img src={assets.question_icon} alt="" />
           {extended ?<p>Help</p>:null}
        </div>
        <div className="Activity icon">
          <img src={assets.history_icon} alt="" />
          {extended ?<p>Activity</p>:null}
        </div>
        <div className="Setting icon">
          <img src={assets.setting_icon} alt="" />
          {extended ?<p>Setting</p>:null}
        </div>

      </div>
    </div>
  )
}

export default Sidebar