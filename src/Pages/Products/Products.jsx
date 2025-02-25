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
 let { products } = useSelector((state) => state.productRd);
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



















 function PaginationExample  ({ products, productsPerPage }) {
    const [currentPage, setCurrentPage] = useState(1);
  
    // Calculate the total number of pages
    const totalPages = Math.ceil(products.length / productsPerPage);
  
    // Function to handle page change
    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };
  
    // Get the current products to display based on the current page
    const indexOfLastItem = currentPage * productsPerPage;
    const indexOfFirstItem = indexOfLastItem - productsPerPage;
     products = products.slice(indexOfFirstItem, indexOfLastItem);}
  console.log(products )

  return (<>


    <div className="flex justify-center items-center p-5">

    <h2 className=" text-green-600 font-extrabold text-2xl">All Products</h2>
  </div>
    <div className=" row">
     
      {products.map((product) => {
        return (
          <div

            key={product.id}
            className="p-5  sm:w-full md:w-1/2 lg:w-1/5 xl:w-1/6 product "
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










    {/* pagenation */}






{/* <div className="flex justify-center items-center my-5">
<nav aria-label="Page navigation example">
  <ul className="flex items-center -space-x-px h-8 text-sm">
    <li>
      <button  onClick={()=>{handlePageChange(currentPage - 1)}} disabled={currentPage === 1 } className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
        </svg>
      </button>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
  
    <li>
      <button    onClick={()=>{handlePageChange(currentPage + 1)}} disabled={currentPage === totalPages }              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
        </svg>
      </button>
    </li>
  </ul>
</nav>

</div> */}



















    </>
  );
}
