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
      <div className="row  ">
        {brands?.map((brand) => {
          return (
            <Link  key={brand._id}
              className="w-1/3 text-center flex items-center"
              to={`/brandsDetalis/${brand._id}`}
            >
              <div className="outter p-3  ">
                <div className="inner cursor-pointer ">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className=" rounded-full w-[200px] h-[200px] hover:shadwo-xl hover:scale-[1.1]  transition-all duration-500"
                  />
                  <h5 className="font-bold text-green-600 text-2xl m-1">
                    {brand.name}
                  </h5>
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
