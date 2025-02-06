import React from "react";
import styles from "./Category.module.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
export default function Categories() {
  function getCategory() {
    return axios(`https://ecommerce.routemisr.com/api/v1/categories`);
  }
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });

  if (isLoading) return <div>loadinig....</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="row">
        {data.data?.data.length > 0 &&
          data.data?.data.map((category) => {
            return (
              <div className=" p-3 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 xxl:w1/5">
                <div className="inner cursor-pointer">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-[300px]"
                  />
                  <h4 className=" text-green-600 font-bold text-xl">
                    {category.name}
                  </h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
