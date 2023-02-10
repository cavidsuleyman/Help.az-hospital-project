import React, {useContext} from 'react';
import { HospitalContext } from '../../Context';
import "./style.css";

const ServiceSearch = () => {

  let {serviceCardData, setServiceCard} = useContext(HospitalContext);

  const searchService = (e) => {
      let search = e.target.value;
      setServiceCard(serviceCardData.filter(v => v.service_card_name.toUpperCase().match(search.toUpperCase())))
  }

  return (
    <div className='sevrice-search-side'>
        <form action="#">
            <input onChange={searchService} type="text" placeholder='Search....'/>
        </form>
    </div>
  )
}

export default ServiceSearch