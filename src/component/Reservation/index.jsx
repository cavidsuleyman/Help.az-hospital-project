import React from 'react';
import "./style.css"

const Reserv = () => {
  return (
    <>
      <div className='reserv-header'>
          <h1>Reservation</h1>
      </div>
    <div className='reserv-form-side'>
      <form action="#">
        <h4>Book an Appointment</h4>
            <div className='reserv-main-details'>
                <div className='reserv-input-box'>
                    <span className='reserv-title'>Select Service</span>
                    <select required>
                        <option value="X-ray">X-ray</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Dental">Dental</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Pediatric">Pediatric</option>
                        <option value="Traumatology">Traumatology</option>
                    </select>
                </div>
                <div className='reserv-input-box'>
                    <span className='reserv-title'>Name</span>
                    <input type="text" required placeholder='Enter Your Name'/>
                </div>
                <div className='reserv-input-box'>
                    <span className='reserv-title'>Surname</span>
                    <input type="text" required placeholder='Enter Your Surname'/>
                </div>   
            </div>
            <div className='reserv-main-details'>
                <div className='reserv-input-box'>
                    <span className='reserv-title'>Phone Number</span>
                    <input type="text" required placeholder='Enter Your Phone Number'/>
                </div>
                <div className='reserv-input-box'>
                    <span className='reserv-title'>Date</span>
                    <input type="date" required/>
                </div>
                <div className='reserv-input-box'>
                    <span className='reserv-title'>Email</span>
                    <input type="text" required placeholder='Enter Your Email'/>
                </div>   
            </div>
            <div className='reserv-button'>
                <button>Submit</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Reserv