import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React from "react";

export const WishContext = createContext();
const headers = { token: localStorage.getItem("token") };

export default function WishListContextProvider({ children }) {
  const [nOfWishItems, setNOfWishItems] = useState(0);
  const [isActive, setIsActive] = useState(false)



 
  function toggleHeart() {


    setIsActive(!isActive);
   
    const newState = !isActive;
    setIsActive(newState);
    localStorage.setItem('wishlist-heart', JSON.stringify(newState));
   
  }
 
  useEffect(() => {
    const savedState = localStorage.getItem('wishlist-heart');
    if (savedState !== null) {
      setIsActive(JSON.parse(savedState));
    }
  }, []);
  




  function addToWishList(id) {
    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          productId: id,
        },
        { headers }
      )
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => err);
  }

  function getLoggedWishItems() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/wishlist", { headers })
      .then((res) => {
        // console.log(res.data);

        return res.data;
      })
      .catch((err) => err);
  }

  async function getWishItem() {
    let response = await getLoggedWishItems();
    // console.log(response);
    setNOfWishItems(response.count);
  }

  useEffect(() => {
    getWishItem();
  }, []);


  function removeWishItem(productId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        headers,
      })
      .then((res) => res.data)
      .catch((err) => err);
  }

  return (
    <WishContext.Provider
      value={{
        addToWishList,
        getLoggedWishItems,
        toggleHeart,
        removeWishItem,
        getWishItem,
        nOfWishItems,
        setNOfWishItems,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </WishContext.Provider>
  );
}
