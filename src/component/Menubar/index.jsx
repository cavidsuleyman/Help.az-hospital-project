import React, {useRef} from 'react';
import './style.css';
import { ForkOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import { FaTimes, FaBars } from "react-icons/fa";




const Menubar = () => {

     const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return (
     <header>
     <ForkOutlined style={{fontSize: "36px", color: "white"}}/>
     <nav ref={navRef}>
          <Link className='link' to="/">
            <li>Home</li>
          </Link>
          <Link className='link' to="/about">
            <li>About</li>
          </Link>
          <Link className='link' to="/service">
            <li>Service</li>
          </Link>
          <Link className='link' to="/contact">
            <li>Contact</li>
          </Link>
          <Link className='link' to="/reservation">
            <li>Reservation</li>
          </Link>
          <Link className='link' to="/career">
            <li>Career</li>
          </Link>
          <button
               className="nav-btn nav-close-btn"
               onClick={showNavbar}>
               <FaTimes />
          </button>
     </nav>
     <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
     </button>
</header>
  )
}

export default Menubar

