import React from "react";
import styles from "./CategorySlider.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Slider from"react-slick"



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
  ]
};


export default function CategorySlider() {
  const [category, setCategory] = useState([]);

 
  function getCategory() {
    axios(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
  
<div className="m-10 ">
      <Slider {...settings}>
        
      {category.length > 0 &&
        category.map((category) => {
          return (
            <div key={category._id } className="cursor-pointer p-3 " >
            <div>
            <img src={category.image} alt={category.name}  className="w-full h-[200px]"/>
              <h4 className="font-semibold text-green-400">{category.name}</h4>
              {console.log(category)}
            </div>
            </div>
          );
        })}
        
      </Slider>
      </div>
  );
}
