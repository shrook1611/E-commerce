import axios from "axios";
import { createContext } from "react";

export const CartContext = createContext();
export default function CartContextProvider({ children }) {
  const headers = { token: localStorage.getItem("token") };
  function addTocart(id) {
    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          productId: id,
        },
        { headers }
      )
      .then((res) => res.data)
      .catch((err) => err);
  }

  function getLoggedcartItems() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", { headers })
      .then((res) => res.data)
      .catch((err) => err);
  }

  function removeCartItem(productId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers,
      })
      .then((res) => res.data)
      .catch((err) => err);
  }
  function updateCartProducts(productId, count) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count: count },
        {
          headers,
        }
      )
      .then((res) => res.data)
      .catch((err) => err);
  }

  function clearcartProducts(){
    return axios
      .delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        
        {
          headers,
        }
      )
      .then((res) => res.data)
      .catch((err) => err);
  }
  

  return (
    <CartContext.Provider
      value={{ addTocart, getLoggedcartItems, removeCartItem ,updateCartProducts ,clearcartProducts}}
    >
      {children}
    </CartContext.Provider>
  );
}
