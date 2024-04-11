import React from 'react'
import './Homesearch.css'

const Homesearch = () => {
  return (
    <div className='hsearch'>
        <h2>Let us help you find the right gunpla for you</h2>
        <form action="" class="search-bar">
            <input type="search" name="search" pattern=".*\S.*" required/>
            <button class="search-btn" type="submit">
                <span>Search</span>
            </button>
        </form>
    </div>
  )
}

export default Homesearch
