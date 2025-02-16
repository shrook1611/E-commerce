import React from 'react'
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function RestPassword() {

    const navigate = useNavigate()


const  initialValues={
    code:''
}

function handelCode(data){
    console.log(data.code)

if(data.code==data.code){

toast.success('password changed successfully')
navigate('/login')
}





}



  const formik = useFormik({
    initialValues,
   

    onSubmit: handelCode,
  });


  return (
    <div>


<div className="p-5 m-5">
      <h2 className=" text-xl font-bold text-green-700 capitalize">
        please enter verfication code:
      </h2>

      <form className="w-1/2 mx-auto" onSubmit={formik.handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="code"
            className="block mb-2  font-bold text-md capitalize text-gray-900 dark:text-white"
          >
            Your code:
          </label>
          <input
            type="number"
            id="code"
            name="code"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Verify your code"
            onChange={formik.handleChange}
            value={formik.values.code}
            onBlur={formik.handleBlur}
          />
          {formik.touched.code && formik.errors.code && (
            <small className="text-red-800">{formik.errors.code}</small>
          )}
        </div>

        <button type="submit " className="btn">
          verfiy
        </button>
      </form>
    </div>




    </div>
  )
}
