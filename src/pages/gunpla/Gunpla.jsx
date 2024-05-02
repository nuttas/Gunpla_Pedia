import React from 'react'
import Grades from '../../components/grades/Grades'
import Topgunpla from './topgunpla/Topgunpla'
import Newslide from '../../components/newslider/Newslide'
import Recommends from '../../components/recommends/Recommends'

const Gunpla = () => {
  return (
    <div>
      <Topgunpla/>
      <Newslide/>
      <Grades />
      <Recommends />
    </div>
  )
}

export default Gunpla
