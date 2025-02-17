import React, { useContext } from "react";
import styles from "./LatestProducts.module.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import ProductItem from "./../ProductItem/ProductItem";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";
import { CartContext } from "../Context/CartContext";
import { WishContext } from "../Context/WishListContext";

export default function LatestProducts() {
  const { addTocart, setNOfCartItems, setCartId } = useContext(CartContext);
  const { addToWishList, nOfWishItems, setNOfWishItems,getLoggedWishItems } =
    useContext(WishContext);
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

  async function addProduct(id) {
    const res = await addTocart(id);

    if (res.status == "success") {
      setNOfCartItems(res.numOfCartItems);
      setCartId(res.cartId);
      toast.success(res.message, {
        style: { fontWeight: "bold", color: "green" },
      });
    } else {
      toast.error("somthing went wrong");
    }
    console.log(res);
  }

  async function addWish(id) {
     const res = await addToWishList(id);
     getLoggedWishItems()
    console.log(res)

    if (res.status == "success") {
      toast.success(res.message, {
        style: { fontWeight: "bold", color: "green" },
      });
    } else {
      toast.error("somthing went wrong");
    }
   
  }

  return (
    <div className="row ">
      {products.length > 0 ? (
        products.map((product) => {
          return (
            <div
              className=" gap-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6"
              key={product.id}
            >
              <ProductItem
                product={product}
                addProduct={addProduct}
                addWish={addWish}
              />
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}
