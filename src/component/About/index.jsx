import React from 'react';
import './style.css';
import foto from './image/back.jpg';
import AboutDocum from '../AboutDocum';
import News from '../News';
import Partner from '../Partner';
import CounterAbout from '../CounterPage';
import TestImonial from '../TestImonials';

const About = () => {

 

  return (
    <>
        <div className='about-header'>
          <h1>About</h1>
        </div>
        <AboutDocum foto={foto}/>
        <News/>
        <CounterAbout/>
        <Partner/>
        <TestImonial/>
    </>
  )
}

export default About