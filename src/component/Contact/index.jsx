import React from 'react';
import ContactForm from '../ContactForm';
import ContactInfo from '../ContactInfo';
import ContactMapSide from '../ContactMapSide';
import "./style.css";

const Contact = () => {
  return (
    <>
       <div className='contact-header'>
          <h1>Contact</h1>
        </div>
        <ContactMapSide/>
        <div className='contact-form-side'>
             <ContactForm/>
             <ContactInfo/>
        </div>
        
    </>
  )
}

export default Contact
