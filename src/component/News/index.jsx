import React, {useState} from 'react';
import "./style.css";
import { MdDateRange } from "react-icons/md";
import { newsCardData } from '../../fakedata';

const News = () => {

    const [newsCard, setNewsCard] = useState(newsCardData)


  return (
    <div className='news-side'>
        <h1>LATEST NEWS</h1>

        <div className='news-main'>
            {
                newsCard.map((v,i) => (
                    <div key={"card" + i} className='news-card'>
                        <div className='news-image'>
                            <img src={v.news_photo} alt="" />
                        </div>
                        <div className='news-details'>
                            <p>{v.news_details}</p>
                        </div>
                        <div className='news-date'>
                            <MdDateRange className='news-icon'/>
                            {v.news_date}
                        </div>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default News