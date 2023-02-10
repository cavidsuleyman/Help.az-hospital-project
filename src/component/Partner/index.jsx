import React, {useState} from 'react';
import { partnePhotoData } from '../../fakedata';
import "./style.css";


const Partner = () => {

const [partnerPhoto, setPartnerPhoto] = useState(partnePhotoData)

  return (
    <section className='partner-side'>
        <h1>OUR PARTNERS</h1>
        <div className='partner-logo'>
            {
                partnerPhoto.map((v,i) => (
                    <img key={"partnerLogo" + i} src={v.partner_logo_photo} alt="" />
                ))
            }
            

        </div>
        
    </section>
  )
}

export default Partner