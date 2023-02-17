import React from 'react'
import { useNavigate } from "react-router-dom"
import Notiflix from 'notiflix';

const Cart = (props) => {
  const navigate = useNavigate();

  if (props.cart) {
      return (
        <div className='container'>
            <h1 className='my-5'>Your Cart</h1>
            {/* {localStorage.getItem('token')?"":"Please Login"} */}
            <div className="details">
            <div className="big-img">
                <img src={props.cart.img} alt="" />
            </div>
    
            <div className="box">
                <div className="row">
                    <h2>{props.cart.tittle}</h2>
                    <span>Rs {props.cart.price}</span>
                </div>
                <p>{props.cart.description}</p>
                <p>{props.cart.content}</p>
          
                <button className="cart" onClick={()=>{
                    if(!localStorage.getItem('token')){
                        navigate("/login")
                        Notiflix.Notify.warning("Please Login to Checkout");
                    }
                    else{
                        navigate("/checkout");
                    }
                }}>CheckOut</button>
    
            </div>
        </div>
        </div>
      )
  }
  else{
    return(
        <div className="container">
            <h1 className='my-5'>Your Cart is Empty</h1>
        </div>
    )
  }

}

export default Cart