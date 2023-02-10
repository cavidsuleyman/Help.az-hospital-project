import React from 'react';
import ServiceCard from '../ServiceCard';
import ServiceSearch from '../ServiceSearch';
import "./style.css";


const Service = () => {
  return (
    <>
        <div className='service-header'>
            <h1>Service</h1>
        </div>
        <ServiceSearch/>
        <ServiceCard/>
    </>
  )
}

export default Service