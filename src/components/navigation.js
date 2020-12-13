import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { Avatar } from 'antd'

const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'Contact',
    path: '/contact-us'
  },
  {
    title: 'Login',
    path: '/login'
  }
]


export default function Navigation ({ user }) {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className="site-navigation">
      <span className="menu-title">Blog App</span>
      <div className={`menu-content-container ${menuActive && 'active'}`}>
        <ul>
          {navLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
        <span className="menu-avatar-container">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={36} />
          <span className="menu-avatar-name">{`Syahrizal Setiawan`}</span>
        </span>
      </div>
      <i className={`ionicons icon ion-ios-${!menuActive ? 'menu' : 'close'}`} onClick={() => setMenuActive(!menuActive)} />
    </nav>
  )
}
