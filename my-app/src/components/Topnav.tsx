import React from 'react'

import './style.components/topnav.css'

// import { Link } from 'react-router-dom'

// import Dropdown from './dropdown/Dropdown'

// import notifications from '../assets/JsonData/notification.json'

// import user_image from '../assets/images/icon-5359553_960_720.png'

// import user_menu from '../assets/JsonData/user_menus.json'

// const curr_user = {
//   display_name: 'Usuario',
//   image: user_image
// }

// const renderNotificationItem = (item, index) => (
//   <div className="notification-item" key={index}>
//     <i className={item.icon}></i>
//     <span>{item.content}</span>
//   </div>
// )

// const renderUserToggle = user => (
//   <div className="topnav__right-user">
//     <div className="topnav__right-user__image">
//       <img src={user.image} alt="" />
//     </div>
//     <div className="topnav__right-user__name">{user.display_name}</div>
//   </div>
// )

// const renderUserMenu = (item, index) => (
//   <Link to="/" key={index}>
//     <div className="notification-item">
//       <i className={item.icon}></i>
//       <span>{item.content}</span>
//     </div>
//   </Link>
// )

export const Topnav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          {/* <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          /> */}
          <img
            src="https://vaxxinova.com.br/wp-content/themes/vaxxinova/images/logo-vaxxinova.svg"
            alt="Logo Vaxxinova"
          />
        </div>
        <div className="topnav__right-item"></div>
      </div>
    </div>
  )
}

