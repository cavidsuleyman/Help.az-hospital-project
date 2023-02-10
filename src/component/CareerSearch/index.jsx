import React from 'react';
import "./style.css";

const CareerSearch = () => {
  return (
    <form action='#' className='career-form'>
        <input type="text" placeholder='Job keyword...' required/>
        <button>Search</button>
    </form>
  )
}

export default CareerSearch