import React from 'react'
import Sd from '../../components/grade/sd/Sd'
// import Background from '../../components/Background/Background'
import Navbar from '../../components/header/Navbar'
import Sliderhome from '../../components/sliderhome/Sliderhome'
import Background from '../../components/background/Background'
import Services from '../../components/services/Services'
import Enugrade from '../../components/enugrade/Enugrade'
import Homesearch from '../../components/homesearch/Homesearch'


const Home = () => {
  return (
    <div>
      <Sd />
      <Background />
      <Enugrade />
      <Services />
      <Homesearch />
    </div>
  )
}

export default Home
