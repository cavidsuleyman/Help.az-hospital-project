import React, {useState, useEffect} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom'
import {About, Service, Contact, Career, Menubar, Reserv} from './component/index'
import MainPage from './page/MainPage';
import { Button, Result } from 'antd';
import Footer from './component/Footer';
import { FloatButton } from 'antd';
import { Dna } from  'react-loader-spinner'
import { serviceCardData } from './fakedata';
import { HospitalContext } from './Context';



function App() {

  const [loading, setLoading] = useState(false);

  let [serviceCard, setServiceCard] = useState(serviceCardData)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 5000)
  }, [])

  return (
<HospitalContext.Provider value={{serviceCard, setServiceCard, serviceCardData}}>

{
  loading ? 
  <div className='loading-page'>
      <Dna
      visible={true}
      height="100"
      width="120"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
</div>
  :

  <BrowserRouter>
      <Menubar/>
          <Routes>
            <Route path='/' element={<Outlet/>}>
                <Route index element={<MainPage/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='service' element={<Service/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='reservation' element={<Reserv/>}/>
                <Route path='career' element={<Career/>}/>
                <Route path='*' element={<Navigate to="404"/>}/>
            </Route>
            <Route path='404' element={
                <Result
                className='error-side'
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                  <Link to="/">
                      <Button style={{background: "#1746A2"}} type="primary">Back Home</Button>
                  </Link>
                
              }
              />            
            }/>
          </Routes>
          <FloatButton.BackTop/>
          <Footer/>
    </BrowserRouter>

}
    
  </HospitalContext.Provider>
  );
}

export default App;
