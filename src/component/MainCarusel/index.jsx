import React from 'react';
import "./style.css"


import { Carousel } from 'antd';
const firstcontentStyle = {
  height: '550px',
  lineHeight: '500px',
  textAlign: 'center',
};
const secondcontentStyle = {
  height: '550px',
  lineHeight: '500px',
  textAlign: 'center',
};
const thirdcontentStyle = {
  height: '550px',
  lineHeight: '500px',
  textAlign: 'center',
};
const MainCarusel = () => (

  <Carousel className='carusel-main-side' autoplay>
    <div className='firstcontentStyle'>
      <h3  style={firstcontentStyle}>Dentist</h3>
      <button className='carusel-btn'>LEARN MORE</button>
    </div>
    <div className='firstcontentStyle bg-vaccine'>
      <h3 style={secondcontentStyle}>Vaccination</h3>
      <button className='carusel-btn'>LEARN MORE</button>
    </div>
    <div className='firstcontentStyle bg-threpist'>
      <h3 style={thirdcontentStyle}>Physiotherapist</h3>
      <button className='carusel-btn'>LEARN MORE</button>
    </div>
  </Carousel>
);
export default MainCarusel;