import React, { useContext } from 'react';
import styles from './Home.module.css';
import { CounterContext } from '../../Components/Context/CounterContext';
import LatestProducts from '../../Components/LatestProducts/LatestProducts';
import CategorySlider from './../../Components/CategorySlider/CategorySlider';
import MainSlider from './../../Components/MainSlider/MainSlider';
export default function Home() {

let {counter}=useContext(CounterContext)



  return (
    <div>
      <MainSlider></MainSlider>
      <CategorySlider></CategorySlider>
      <LatestProducts/>
    </div>
  )
}
