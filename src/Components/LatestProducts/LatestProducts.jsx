import React from "react";
import styles from "./LatestProducts.module.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import ProductItem from './../ProductItem/ProductItem';
import Loader from "../Loader/Loader";

export default function LatestProducts() {
  const [products, setProducts] = useState([]);
  async function getProduct() {
    await axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="row ">
      {products.length > 0 ?
        products.map((product) => {
          return <div  className=' gap-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'   key={product.id}>

<ProductItem product={product}/>











          </div>;
        }):<Loader/>}
    </div>
  );
}
