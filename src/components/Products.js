import React from 'react'
import { Link } from 'react-router-dom'
import { About } from './About'
import { useParams } from 'react-router-dom'

const Products = (props) => {
  return (
    <div className='container my-5'>
        <h1 className='my-4'>Products</h1>
        <div class="container">
    <div class="row">
        <div class="col-sm-3">
            <Link class="card card-hover text-decoration-none" to="/productDetail" onClick={()=>{props.handler(0)}}>
                <img class="card-img-top img-fluid" src="https://m.media-amazon.com/images/I/71CrNuzQaHL._SL1500_.jpg" alt="Card image cap"/>
                <div class="card-block mx-4">
                    <h4 class="card-title card-tit-style text-black ">Apple Watch Series 7</h4>
                </div>      
            </Link>
        </div>
        <div class="col-sm-3">
            <Link class="card card-hover text-decoration-none" to="/productDetail" onClick={()=>{props.handler(1)}}>
                <img class="card-img-top img-fluid my-5" src="https://m.media-amazon.com/images/I/61KVX-MbIUL._SL1500_.jpg" alt="Card image cap"/>
                <div class="card-block mx-4">
                    <h4 class="card-title card-tit-style text-black">Samsung Galaxy Buds2 Pro</h4>
                </div>
            </Link>
        </div>
        <div class="col-sm-3">
            <Link class="card card-hover text-decoration-none" to="/productDetail" onClick={()=>{props.handler(2)}}>
                <img class="card-img-top img-fluid my-2" src="https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg" alt="Card image cap"/>
                <div class="card-block mx-4">
                    <h4 class="card-title card-tit-style text-black">Apple AirPods Pro</h4>
                </div>
            </Link>
        </div>
        <div class="col-sm-3">
            <Link class="card card-hover text-decoration-none" to="/productDetail" onClick={()=>{props.handler(3)}}>
                <img class="card-img-top img-fluid my-2" src="https://m.media-amazon.com/images/I/71--IQUHVwL._SL1500_.jpg" alt="Card image cap"/>
                <div class="card-block mx-4">
                    <h4 class="card-title card-tit-style text-black">Lenovo IdeaPad Gaming 3</h4>
                </div>
            </Link>
        </div>
        <div class="col-sm-3 my-5">
            <Link class="card card-hover text-decoration-none" to="/productDetail" onClick={()=>{props.handler(4)}}>
                <img class="card-img-top img-fluid my-2" src="https://m.media-amazon.com/images/I/71--IQUHVwL._SL1500_.jpg" alt="Card image cap"/>
                <div class="card-block mx-4">
                    <h4 class="card-title card-tit-style text-black">Lenovo IdeaPad Gaming 3</h4>
                </div>
            </Link>
        </div>
        <div class="col-sm-3 my-5">
            <Link class="card card-hover text-decoration-none" to="/productDetail" onClick={()=>{props.handler(5)}}>
                <img class="card-img-top img-fluid my-2" src="https://m.media-amazon.com/images/I/91zVSkGGZbS._SL1500_.jpg" alt="Card image cap"/>
                <div class="card-block mx-4">
                    <h4 class="card-title card-tit-style text-black">ASUS TUF Gaming</h4>
                </div>
            </Link>
        </div>
        <div class="col-sm-3 my-5">
            <Link class="card card-hover text-decoration-none" to="/productDetail" onClick={()=>{props.handler(6)}}>
                <img class="card-img-top img-fluid my-2" src="https://m.media-amazon.com/images/I/51DmOWr3rnL._SL1000_.jpg" alt="Card image cap"/>
                <div class="card-block mx-4">
                    <h4 class="card-title card-tit-style text-black">HP Pavilion</h4>
                </div>
            </Link>
        </div>
        <div class="col-sm-3 my-5">
            <Link class="card card-hover text-decoration-none" to="/productDetail" onClick={()=>{props.handler(7)}}>
                <img class="card-img-top img-fluid my-2" src="https://m.media-amazon.com/images/I/61Er61SxBhL._SL1500_.jpg" alt="Card image cap"/>
                <div class="card-block mx-4">
                    <h4 class="card-title card-tit-style text-black">Lenovo Legion 5</h4>
                </div>
            </Link>
        </div>
        <div class="col-sm-3">
            <Link class="card card-hover text-decoration-none" to="/productDetail" onClick={()=>{props.handler(8)}}>
                <img class="card-img-top img-fluid my-2" src="https://m.media-amazon.com/images/I/61nJfQx0SlL._SL1080_.jpg" alt="Card image cap"/>
                <div class="card-block mx-4">
                    <h4 class="card-title card-tit-style text-black">Dell G5 AMD Ryzen</h4>
                </div>
            </Link>
        </div>
    </div>
</div>
  </div>
  )
}

export default Products