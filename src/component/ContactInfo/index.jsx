import React from 'react';
import "./style.css";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";




const ContactInfo = () => {
  return (
    <div className='contact-info-side'>
        <h4>Get in touch</h4>
        <div className='contact-info-details-side'>
            <div className='contact-info-details'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea soluta eaque, architecto aut non impedit magni! Sunt odit atque voluptatibus!</p>
            </div>
            <div className='contact-info-icon-details'>
                <div className='contact-info-icon'>
                    <MdEmail color='#1746A2' fontSize={26}/>
                    <p>hospital@example.com</p>
                </div>
                <div className='contact-info-icon'>
                    <MdLocationOn color='#1746A2' fontSize={26}/>
                    <p>New York, USA</p>
                </div>
                <div className='contact-info-icon'>
                    <FaPhoneAlt color='#1746A2' fontSize={26}/>
                    <p>+999-99-99</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo