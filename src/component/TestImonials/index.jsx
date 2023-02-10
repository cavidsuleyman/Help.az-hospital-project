import React, {useState} from 'react';
import { testImonialData } from '../../fakedata';
import './style.css'

const TestImonial = () => {

const [testImon, setTestImon] = useState(testImonialData)

  return (
    <div className='testimon-main'>
        <h1>TESTIMONIALS</h1>
        <div className='testimon-main-cards'>
            {
                testImon.map((v,i) => (
                    <div key={"testImon" + i} className='testimon-main-card'>
                        <div className='testimon-details'>
                            <div className='testimon-image'>
                                <img src={v.testImon_photo} alt="" />
                            </div>
                        </div>
                        <div className='testimon-title'>
                            <div className='testimon-name'>{v.testImon_name}</div>
                            <p>{v.testImon_title}</p>
                        </div>
                    </div>
                ))
            }
           
        </div>
    </div>
  )
}

export default TestImonial