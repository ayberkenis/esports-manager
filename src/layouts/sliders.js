import React from 'react';
import Slider from 'react-slick';



const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    className: 'actions-slider',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
<Slider {...settings}>
  <div className="action--slide">
    <div className="action--slide-content">
      <h2 className="action--slide-text">Multiple games to choose from</h2>
      <button className="action--slide-button">Play Now</button>
    </div>
    <img alt="background" className="action--slide-image" src="https://images.unsplash.com/photo-1636036766419-4e0e3e628acc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"></img>
  </div>
  <div className="action--slide">
    <div className="action--slide-content">
      <h2 className="action--slide-text">Build your dream team</h2>
    </div>
    <img alt="background" className="action--slide-image" src="https://images.unsplash.com/photo-1558008322-9793c57cb73b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"></img>

  </div>
  <div className="action--slide">
    <div className="action--slide-content">
      <h2 className="action--slide-text">Compete against other players</h2>
    </div>
        <img alt="background" className="action--slide-image" src="https://images.unsplash.com/photo-1585805152588-5beb7808255d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"></img>
  </div>
</Slider>

  );
};

export default HomeSlider;
