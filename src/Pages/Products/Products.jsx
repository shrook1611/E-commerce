import React, { useContext, useEffect } from "react";
import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./../../redux/store";

import { getProducts } from "./../../redux/productSlice";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../Components/Context/CartContext";
import toast from "react-hot-toast";
export default function Products() {
  const { products } = useSelector((state) => state.productRd);
  const dispatch = useDispatch();
  const { addTocart, setNOfCartItems, setCartId } = useContext(CartContext);

  console.log(products);

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

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className=" row">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="p-5  sm:w-full md:w-1/2 lg:w-1/5 product "
          >
            <Link to={`/productdetails/${product.id}`}>
              <div className="inner ">
                <img src={product.imageCover} alt={product.title} />
                <h4 className=" font-bold font-2xl text-green-700 text-center">
                  {product.title.split(" ").slice(0, 3).join(" ")}
                </h4>
              </div>
            </Link>

            <button
              onClick={() => {
                addProduct(product.id);
              }}
              className="btn w-full flex justify-between items-center font-semibold "
            >
              Add to cart <FaCartShopping />{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}
