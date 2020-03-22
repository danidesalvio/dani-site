import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../../images/ddlogo_white.png';
import MenuIn from './MenuIn';

const Nav = () => (
  // This nav isn't working for me the way i wanted, i tried to customize it using className and custom CSS and it messed up my whole site and changed the links to stop working
  // <Menu>
  //   <div class='logo-container'>
  //     <Image 
  //       src={logo}
  //       className='logo'
  //       />
  //   </div>
  //   <div>
  //     <Link to="/">
  //       <Menu.Item>
  //         Home
  //       </Menu.Item>
  //     </Link>
  //     <Link to="/about">
  //       <Menu.Item>
  //         About
  //       </Menu.Item>
  //     </Link>
  //     <Link to="/work">
  //       <Menu.Item>
  //         Work
  //       </Menu.Item>
  //     </Link>
  //     <Link to="/blog">
  //       <Menu.Item>
  //         Blog
  //       </Menu.Item>
  //     </Link>
  //   </div>
  // </Menu>
    <div class="nav">
      <div class="nav-logo">
        <a href="/"><img src={logo}/></a>
      </div>
        {/* <div class="nav-items">
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/work'>Work</a>
            <a href='/blog'>Blog</a>
        </div> */}
        
      <div className="menu" onclick={MenuIn}>
        <div className='nav-text'>MENU</div>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
      </div>
    </div>
)

export default Nav;