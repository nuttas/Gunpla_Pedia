import React from 'react'
import Card from '../showcom/Card'
import Series from '../sidebar/series/Series'
import './Product.css'

const Product = ({result, handlechange}) => {
  return (
    <>
      <div className="gproduct-container">
      <section className="sidebar-container">
          <Series handleChange={handlechange}/>
      </section>
        {result}
      </div>
    </>
  )
}

export default Product
