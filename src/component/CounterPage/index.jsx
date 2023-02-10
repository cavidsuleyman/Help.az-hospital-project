import React, {useState} from 'react';
import "./style.css";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaHospitalAlt, FaUserMd, FaUserInjured } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";

const CounterAbout = () => {

const [counterOn, setCounterOn] = useState(false)

  return (
<ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
    <div className='counter-main'>
        <div className='counter-card'>
            <div className='counter-icon'>
                <FaHospitalAlt color='#1746A2'/>
                <p>
                {
                counterOn && <CountUp start={0} end={4} duration={2} delay={0} />
                }
                </p>
            </div>
            <h2>Hospital</h2>      
        </div>
        <div className='counter-card'>
            <div className='counter-icon'>
                <FaUserMd color='#1746A2'/>
                <p>
                {
                counterOn && <CountUp start={0} end={35} duration={2} delay={0}/>
                }
                </p>
            </div>
            <h2>Doctors</h2>      
        </div>
        <div className='counter-card'>
            <div className='counter-icon'>
                <FaUserInjured color='#1746A2'/>
                <p>
                {
                counterOn && <CountUp start={0} end={4000} duration={2} delay={0}/>
                }
                </p>
            </div>
            <h2>Patients</h2>      
        </div>
        <div className='counter-card'>
            <div className='counter-icon'>
                <MdOutlineMedicalServices color='#1746A2'/>
                <p>
                {
                counterOn && <CountUp start={0} end={53} duration={2} delay={0}/>
                }
                </p>
            </div>
            <h2>Service</h2>      
        </div>
    </div>
</ScrollTrigger>
  )
}

export default CounterAbout