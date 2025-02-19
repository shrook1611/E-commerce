import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

export default function UserOrder() {

    async function getUserOrders() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/6407cf6f515bdcf347c09f17`);
      }
    
      const { data, isLoading, error } = useQuery({
        queryKey: ["userOrders"],
        queryFn: getUserOrders,
      });
    
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error fetching orders</div>;
      const userOrders = data?.data?.data;
    
console.log(userOrders,'userorders...')









  return (
    <div>UserOrder</div>
  )
}
