import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Brands() {
  async function getBrands() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching categories</div>;

  const brands = data?.data?.data;

  console.log(brands);

  return (
    <div className="container mx-auto">
      {" "}
      <div className="row gap-2 bg-slate-500 ">
        {brands?.map((brand) => {
          return (
            <Link to={`/brandsDetalis/${brand._id}`}>
              <div
                className="outter p-3  shadow-xl text-center relative  bg-red-200"
                key={brand._id}
              >
                <div className="inner cursor-pointer bg-green-300 sm:w-full md:w-1/2 lg:w-1/3 ">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className=" rounded-full hover:shadwo-lg hover:rotate-[360deg] hover:scale-[1.1]  transition-all duration-500"
                  />
                  <h5 className="font-bold text-green-600">{brand.name}</h5>
                  <div className="layer "></div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
