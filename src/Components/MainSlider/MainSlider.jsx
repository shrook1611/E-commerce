import React from 'react';
import styles from './MainSlider.module.css';
import sliderImg1 from'./../../assets/slider-image-1.jpeg'
import sliderImg2 from'./../../assets/slider-image-2.jpeg'
import sliderImg3 from'./../../assets/slider-image-3.jpeg'
import  Slider  from 'react-slick';
export default function MainSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplayspeed:1000


  };

  return (

    <div className='row mt-4'>

      <div className="w-3/4">


      <Slider {...settings}>
      <div>
        <img src={sliderImg1}alt=""  className='w-full h-[500px]'/>
        </div>


        <div>
        <img src={sliderImg2} alt="" className='w-full h-[500px]' />        </div>


        <div>
        <img src={sliderImg3} alt="" className='w-full h-[500px]' />
        </div>


        </Slider>

      </div>

<div className='w-1/4'>
<img src={sliderImg2} alt="" className='w-full h-[250px]' />
<img src={sliderImg3} alt="" className='w-full h-[250px]' />

</div>

    </div>
  )
}
