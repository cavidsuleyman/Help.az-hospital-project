import React from 'react';
import './style.css';
import { FaMedkit, FaUserMd, FaAmbulance} from "react-icons/fa";

const IconSide = () => {
  return (
    <div className='hero-side'>
        <div className='hero-card'>
            <FaMedkit className='hero-icon'/>
            <h1>Quality Safety</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tenetur ipsam aliquid quam, autem nisi cupiditate neque. Facilis, distinctio quas.   </p>
        </div>
        <div className='hero-card'>
            <FaUserMd className='hero-icon'/>
            <h1>Professional Doctors</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tenetur ipsam aliquid quam, autem nisi cupiditate neque. Facilis, distinctio quas.   </p>
        </div>
        <div className='hero-card'>
            <FaAmbulance className='hero-icon'/>
            <h1>24/7 Service</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tenetur ipsam aliquid quam, autem nisi cupiditate neque. Facilis, distinctio quas.   </p>
        </div>
    </div>
  )
}

export default IconSide