import React, { useState } from 'react';
import './Newslide.css'

const Newslide = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let newIndex = n;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      newIndex = 1;
    }
    if (n < 1) {
      newIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    // Remove 'active' class from all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    // Show the current slide
    slides[newIndex - 1].style.display = 'block';
    dots[newIndex - 1].className += ' active';

    // Update state to reflect the current slide index
    setSlideIndex(newIndex);
  };

  return (
    <div>
      <div className='topnewslide'>
        <h1>News & Upcoming products</h1>
      </div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src="https://da.lnwfile.com/9phhig.jpg" style={{ width: '100%' }} alt="Slide 1" />
          
        </div>

        <div className="mySlides fade">
          <img src="https://da.lnwfile.com/_/da/_raw/np/53/by.jpg" style={{ width: '100%' }} alt="Slide 2" />
          
        </div>

        <div className="mySlides fade">
          <img src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/355104437_716387297165889_3051305454488190266_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AZYLP4W__HwAb7NOM9c&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfDi2MWY_atXKh9S8fcA0hRX1661l_Sgjt5hKq5LtxAfrA&oe=66358D56" style={{ width: '100%'}} alt="Slide 3" />
          
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Newslide;
