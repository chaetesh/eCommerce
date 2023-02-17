import React from 'react'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ProductDetail = (props) => {
  return (
    <div className="app">
    <div className="details">
        <div className="big-img">
            <img src={props.product.img} alt="" />
        </div>

        <div className="box">
            <div className="row">
                <h2>{props.product.tittle}</h2>
                <span>Rs {props.product.price}</span>
            </div>
            <p>{props.product.description}</p>
            <p>{props.product.content}</p>
      
            <button className="cart" onClick={()=>{
              props.setCart(props.product);
              Notify.success('Added to Cart');
            }}>Add to Cart</button>

        </div>

    </div>
    </div>
  )
}

export default ProductDetail