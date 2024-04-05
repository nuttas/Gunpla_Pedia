import React from 'react'
import Sd from '../../components/grade/sd/Sd'
// import Background from '../../components/Background/Background'
import Navbar from '../../components/header/Navbar'
import Sliderhome from '../../components/sliderhome/Sliderhome'
import Background from '../../components/background/Background'
import Services from '../../components/services/Services'


const Home = () => {
  return (
    <div>
      <Sd />
      <Background />
      <Sliderhome />
      <Services />
    </div>
  )
}

export default Home
