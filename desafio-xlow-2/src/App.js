import React, { useState, useEffect } from "react";
import "./App.css";
import ArrowRight from './assets/arrow-right.png';
import ArrowLeft from './assets/arrow-left.png';

const SliderImages = [
  {
    url:
      "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt:
      "Primeira paisagem",
    link:
      "#",
  },
  {
    url:
      "https://images.unsplash.com/photo-1553787762-b5f5721f3270?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt:
      "Segunda paisagem",
    link:
      "#",
  },
  {
    url:
      "https://images.unsplash.com/photo-1579970521525-188aaf56351c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt:
      "Terceira paisagem",
    link:
      "#",
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === SliderImages.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? SliderImages.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider">
        {SliderImages.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={slide.url} alt={slide.alt} className="slide-image" />
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={goToPrevSlide}>
        <img src={ArrowLeft} alt="Left Arrow" />
      </button>
      <button className="arrow right" onClick={goToNextSlide}>
        <img src={ArrowRight} alt="Right Arrow" />
      </button>
      <div className="dots">
        {SliderImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default App;
