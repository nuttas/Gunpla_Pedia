import React, { useState } from 'react'
import Grades from '../../components/grades/Grades'
import Topgunpla from './topgunpla/Topgunpla'
import Newslide from '../../components/newslider/Newslide'
import Recommends from '../../components/recommends/Recommends'
import Product from '../../components/showgun/Product'
import Guidegrade from '../../components/guidegrade/Guidegrade'
import Gsearch from '../../components/gsearch/Gsearch'

import products from '../../db/data'
import Card from '../../components/showcom/Card'

const Gunpla = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [query, setQuery] = useState("");

  //input filter
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) => 
   product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  //radio filter
  const handleChange = event => {
    setSelectedSeries(event.target.value);
  };

  //buttons filter
  const handleClick = event => {
    setSelectedSeries(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ serie, grade, name }) =>
          serie === selected ||
          grade === selected ||
          name === selected
      );
    }

    return filteredProducts.map(({img, name, star, totalrating }) => (
      <Card 
      key = {Math.random()}
      img = {img}
      name = {name}
      star = {star}
      totalrating = {totalrating}
      />
    ))
  }

  const result = filteredData(products, selectedSeries, query);

  return (
    <div>
      <Topgunpla/>
      <Newslide/>
      <Grades />
      <Recommends />
      <Topgunpla/>
      <Gsearch query={query} handleInputChange={handleInputChange}/>
      <Guidegrade handleClick={handleClick}/>
      <Product result={result} handleChange={handleChange}  />
      
    </div>
  )
}

export default Gunpla
