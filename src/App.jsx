import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Pages/MainLayOut/MainLayOut";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
import SignOut from "./Pages/SignOut/SignOut";
import Category from "./Pages/Category/Category";
import Cart from "./Pages/Cart/Cart";
import NotFound from "./Pages/NotFound/NotFound";
import CounterContextProvider from "./Components/Context/CounterContext";
import TokenContextProvider from "./Components/TokenContext/TokenContext";
import ProtctedRoutes from "./Components/ProtctedRoutes/ProtctedRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { Offline, Online } from "react-detect-offline";
import { CiWifiOff } from "react-icons/ci";
import CartContextProvider from "./Components/Context/CartContext";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {Toaster}from"react-hot-toast"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      children: [
        {
          index: true,
          element: (
            <ProtctedRoutes>
              <Home />
            </ProtctedRoutes>
          ),
        },
        {
          path: "Products",
          element: (
            <ProtctedRoutes>
              <Products />
            </ProtctedRoutes>
          ),
        },
        { path: "Login", element: <LogIn /> },
        { path: "register", element: <Register /> },

        { path: "signOut", element: <SignOut /> },
        {
          path: "Category",
          element: (
            <ProtctedRoutes>
              <Category />
            </ProtctedRoutes>
          ),
        },
        {
          path: "Cart",
          element: (
            <ProtctedRoutes>
              <Cart />
            </ProtctedRoutes>
          ),
        },
        {
          path: "productdetails/:productId",
          element: (
            <ProtctedRoutes>
              <ProductDetails/>
            </ProtctedRoutes>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>

    <TokenContextProvider>
     <CartContextProvider>
     <CounterContextProvider>
       
       <Offline> <div className="offline fixed bottom-2 right-4 bg-slate-100 p-2 font-medium rounded-lg z-50 flex justify-between items-center gap-2"> <CiWifiOff />
       You are  now offline
       

       </div>
      
       </Offline>
       <Toaster position="bottom-right"/>
       <ReactQueryDevtools initialIsOpen={false} />
       <RouterProvider router={routes}>
       
   
       </RouterProvider>
     </CounterContextProvider>
     </CartContextProvider>
    </TokenContextProvider>
    </QueryClientProvider>
  );
}
