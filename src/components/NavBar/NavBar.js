import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-section-1">
      <a href="/">
      {/* <img className="groot" alt="" src="/images/groot.png"></img> */}
      <h4 className="morning-nav">React-Starter-Morning</h4>
      </a>
      </div>
      <div className="nav-section-2">
        <a className="nav-links" href="/blog">Blog</a>
        <a className="nav-links" href="/about">About</a>
        <a className="nav-links" href="/installation">Installation</a>
        <img className="sun" alt=""  src="/images/sun.png"></img>
      </div>
    </nav>
  )
}
