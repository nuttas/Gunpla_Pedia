import React from 'react'
import './Recommend.css'

const Recommend = () => {
  return (
    <div className='body-gallery'>
      <div className='gallery'>
        <div className='gallery-container'>
            <img className='gallery-item gallery-item1' src='https://da.lnwfile.com/_/da/_raw/6m/8e/0h.jpg' data-index='1'/>
            <img className='gallery-item gallery-item2' src='https://da.lnwfile.com/_/da/_raw/g7/bz/ap.jpg' data-index='2'/>
            <img className='gallery-item gallery-item3' src='https://da.lnwfile.com/_/da/_raw/wo/2q/r0.jpg' data-index='3'/>
            <img className='gallery-item gallery-item4' src='https://da.lnwfile.com/_/da/_raw/h4/bh/9g.jpg' data-index='4'/>
            <img className='gallery-item gallery-item5' src='https://da.lnwfile.com/_/da/_raw/1t/dj/dq.jpg' data-index='5'/>
        </div>
        <div className='gallery-controls'></div>
      </div>
    </div>
  )
}

export default Recommend
