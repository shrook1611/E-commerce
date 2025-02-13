import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BrandsDetalis() {
  const [branData, setBrandDAta] = useState([]);

  const { brandId } = useParams();

  async function getBrandDetalis() {
    await axios
      .get(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`)
      .then((res) => {
        setBrandDAta(res.data.data);
      })
      .catch((err) => err);
  }

  useEffect(() => {
    getBrandDetalis();
  }, []);

  return (
    <div className=" flex items-center">
      <div className="imgHolder w-1/2">
        <img src={branData.image} alt="" />
      </div>

      <div className="w-1/2">
        <h2 className="text-green-600 font-bold text-2xl">{branData.name}</h2>
      </div>
    </div>
  );
}
