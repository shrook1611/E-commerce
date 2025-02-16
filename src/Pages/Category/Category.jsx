import React from "react";
import styles from "./Category.module.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Categories() {
  async function getCategories() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching categories</div>;

  const categories = data?.data?.data;

  return (
    <div className="row ">
      {categories?.map((category) => {
        return (
          <div className="w-1/4" key={category.id}>
          
            <div className="outter p-3 mt-5">
              <div className="inner cursor-pointer flex justify-center items-center flex-col ">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-[200px] w-[200px] rounded-full hover:shadwo-lg hover:rotate-[360deg] hover:scale-[1.1]  transition-all duration-500"
                />
                <h5 className="font-bold text-green-600">{category.name}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
