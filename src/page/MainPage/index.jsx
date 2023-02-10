import React from 'react'
import IconSide from '../../component/IconSide'
import Information from '../../component/Information'
import MainCarusel from '../../component/MainCarusel'
import Team from '../../component/Team'


const MainPage = () => {
  return (
    <>
      <MainCarusel/>
      <Team/> 
      <Information/>
      <IconSide/>
    </>
  )
}

export default MainPage