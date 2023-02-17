import React from 'react'
import Navbar from './Navbar';
import Products from './Products';
import { Slide } from './Slide';

export const Home = (props) => {
  return (
    <div>
    <Slide></Slide>
    <Products handler={props.handler}></Products>
    </div>
  )
}
