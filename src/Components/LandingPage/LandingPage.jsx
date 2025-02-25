import React from "react";
import { TypeAnimation } from "react-type-animation";

import sliderImg1 from "./../../assets/portrait-curly-girl-with-red-lipstick-taking-notes-tablet-pink-background-with-dressees_197531-17620.avif";
import sliderImg2 from "./../../assets/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.avif";
import sliderImg3 from "./../../assets/modern-wardrobe-stylish-clothes-accessories-600nw-2470981667.webp";
import sliderImg4 from "./../../assets/shopping-portrait-shirt-happy-handsome_1098-4741.avif";

import Slider from "react-slick";
import { Link } from "react-router-dom";
export default function LandingPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplayspeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="">
        <Slider {...settings}>
          <div className='h-screen  bg-[url("assets/laptop-shopping-bags-online-shopping-concept_1423-189.jpg")] bg-cover bg-cente flex justify-center items-center'>
            <TypeAnimation
              sequence={[
                "Bringing Freshness Straight to Your Cart",
                1000,
                "Bringing Freshness Straight to You ,faster ",
                1000,
                "Bringing Freshness Straight to You ,fresher",
                1000,
                "Bringing Freshness Straight to You ,newer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "3em",
                display: "inline-block",
                fontWeight: "bold",
                color: "white",
              }}
              repeat={Infinity}
            />
          </div>


          <div className='h-screen bg-[url("assets/sales-concept-with-cart-bags_23-2147730827.jpg")] bg-cover bg-cente  flex  justify-center items-center'>
            <div className="  ">
              <div className="md:w-1/2 sm:w-full p-6">
                <h2 className="text-2xl font-bold my-2">
                  One Stop Grocery Shop
                </h2>
                <p className="text-gray-700 lead mb-3">
                  Shopping for your furry friend? Find food,
                  <br />
                  treats, and more in one easy spot.
                </p>

                <Link to={"/products"}>
                  {" "}
                  <button className="btn">Get Disccount</button>
                </Link>
              </div>
            </div>
          </div>



          <div className='h-screen  bg-[url("assets/top-view-laptop-black-friday-promotion-sale-words-lightbox-gift-boxes-trolley-flat-lay_94725-620.jpg")] bg-cover bg-cente flex justify-center items-center'>
           
           
          </div>
        </Slider>
      </div>
    </>
  );
}
