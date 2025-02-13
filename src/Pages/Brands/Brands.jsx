import { useQuery } from '@tanstack/react-query';
import React from 'react'
import  axios  from 'axios';
import { Link, useParams } from 'react-router-dom';


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
    
console.log(brands)





  return (
    <div> <div className="row ">
    {brands?.map((brand) => {
      return (
       <Link     to={`/brandsDetalis/${brand._id}`}> 
       
       <div className="" key={brand._id}>
        
        <div className="outter p-3 w-1/2 product text-center">
          <div className="inner cursor-pointer">
            <img
              src={brand.image}
              alt={brand.name}
              className="h-[200px] "
            />
            <h5 className="font-bold text-green-600">{brand.name}</h5>
          </div>
        </div>
      </div>
       
       
       
       
       
       </Link>
      );
    })}
  </div></div>
  )
}
