import React, {useState} from 'react';
import "./style.css";

const ContactForm = () => {

    const [contact, setContact] = useState({});

    const changeContact = (e) => {
        const name = e.target.name;
        const value = e.target.name;
        setContact(v=>({...v, [name]:value}))
    }

    const submitContact = (e) => {
        e.preventDefault();
        e.target.username.value = "";
        e.target.useremail.value = "";
        e.target.subject.value = "";
        e.target.message.value = "";
    }

  return (
    <>
        
        <form onSubmit={submitContact} action="#">
        <h4>Give us a Message</h4>
            <div className='form-main-details'>
                <div className='form-input-box'>
                    <span className='form-title'>Full Name</span>
                    <input onChange={changeContact} name='username' type="text" required placeholder='Enter Your Full Name'/>
                </div>
                <div className='form-input-box'>
                    <span className='form-title'>Email</span>
                    <input onChange={changeContact}  name='useremail' type="text" required placeholder='Enter Your Email'/>
                </div>   
            </div>
            <div className='form-main-subject'>
                <div className='form-input-subject'>
                    <span className='form-title-subject'>Subject</span>
                    <input onChange={changeContact}  name='subject' type="text" required placeholder='Enter Your Subject'/>
                </div>
            </div>
            <div className='form-main-textarea'>
                <div className='form-input-textarea'>
                    <span className='form-title-textarea'>Your Message</span>
                    <textarea onChange={changeContact}  name='message' required placeholder='Enter Your Message'></textarea>
                </div>
            </div>
            <div className='form-main-button'>
                <button>Submit</button>
            </div>
        </form>
    </>
  )
}

export default ContactForm
