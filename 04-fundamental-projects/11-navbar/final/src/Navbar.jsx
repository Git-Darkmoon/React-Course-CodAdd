<<<<<<< HEAD
import { useState, useRef } from "react"
import { FaBars } from "react-icons/fa"
import { links, social } from "./data"
import logo from "./logo.svg"
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
=======
import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
<<<<<<< HEAD
      : "0px",
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
=======
      : '0px',
  };
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
            <FaBars />
          </button>
        </div>

        <div
<<<<<<< HEAD
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
=======
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
<<<<<<< HEAD
              )
=======
              );
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
            })}
          </ul>
        </div>
        {/* social links */}
<<<<<<< HEAD
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
=======
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
<<<<<<< HEAD
            )
=======
            );
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
          })}
        </ul>
      </div>
    </nav>
<<<<<<< HEAD
  )
}
export default Navbar
=======
  );
};
export default Navbar;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
