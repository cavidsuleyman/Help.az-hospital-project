import React, {useContext} from 'react';
import { HospitalContext } from '../../Context';
import "./style.css";

const ServiceCard = () => {

    let {serviceCard,setServiceCard} = useContext(HospitalContext)

  return (
    <div className='service-card-side'>
        {
            serviceCard.map((v,i) => (
                <div key={"service-card" + i} className='service-card'>
                    <div className='service-image'>
                        <img src={v.service_card_photo} alt="" />
                    </div>
                    <div className='service-title'>
                        {v.service_card_name}
                    </div>
                </div>
            ))
              
        }
      

    </div>
  )
}

export default ServiceCard
