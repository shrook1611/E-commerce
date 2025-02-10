import React from 'react';
import styles from './Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './../../redux/store';
import { dercreament, increamentByAmount, incremant } from '../../redux/counterSlice';
export default function Products() {

const dispatch=useDispatch()




  const {counter}=useSelector((store)=>store.counter)
  return (
    <div>Products {counter}
    
    
    <button className='btn-red block mt-10' onClick={()=>{
      dispatch(dercreament())
    }}>
      -
    </button>
    <button className='btn block mt-10' onClick={()=>{
      dispatch(incremant())}}>
      +
    </button>


    <button className='btn block mt-10' onClick={()=>{
      dispatch(increamentByAmount(10))}}>
      +5
    </button>
    </div>
  )
}
