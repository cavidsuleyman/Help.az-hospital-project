import React, {useState} from 'react';
import { firstTeamData } from '../../fakedata';
import "./style.css";

const Team = () => {

    const [firstTeam, setFirstTeam] = useState(firstTeamData)

  return (
    <section className='main-team'>
        <h1>OUR TEAM</h1>
        <div className='team-container'>
            <input type="radio" name="dot" id="one"/>
            <input type="radio" name="dot" id="two"/>
                    <div className="main-card">
                        <div className="cards">
                            {
                                firstTeam.map((v,i) => (
                                    <div key={"firstteam" + i} className="card">
                                        <div className="content">
                                            <div className="img">
                                                <img src={v.doctor_image} alt=""/>
                                            </div>
                                            <div className="details">
                                                <div className="name">{v.doctor_name}</div>
                                                <div className="job">{v.doctor_job}</div>
                                            </div>
                                        </div>
                                   </div>
                                ))
                            }
                        </div>
                    <div className="cards">
                         {
                                firstTeam.map((v,i) => (
                                    <div key={"firstteam" + i} className="card">
                                        <div className="content">
                                            <div className="img">
                                                <img src={v.doctor_image} alt=""/>
                                            </div>
                                            <div className="details">
                                                <div className="name">{v.doctor_name}</div>
                                                <div className="job">{v.doctor_job}</div>
                                            </div>
                                        </div>
                                   </div>
                                ))
                            }
                    </div>
                </div>
                <div className="button-team">
                        <label htmlFor="one" className="active one"></label>
                        <label htmlFor="two" className="two"></label>
                </div>
        </div>
   
    </section>
  )
}

export default Team