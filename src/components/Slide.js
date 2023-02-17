import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className='d-flex'>
            <img src="https://m.media-amazon.com/images/I/61bX2AoGj2L._SL1500_.jpg" alt="" style={{width:"40vw",height:"85vh"}} />
            <div className="slideDetails">
            <h1 style={{fontFamily:'Lobster'}} className="my-4 display-3">Apple MacBook Pro</h1>
            <a href='#' className="btn btn-light display-5">KnowMore <i className="fa-solid fa-location-arrow"></i></a>
            </div>
          </div>
          <div className='d-flex'>
            <img src="https://m.media-amazon.com/images/I/61VfL-aiToL._SL1500_.jpg" alt="" style={{width:"40vw",height:"85vh"}} />
            <div className="slideDetails">
            <h1 style={{fontFamily:'Lobster'}} className="my-4 display-3">Samsung Galaxy S23 Ultra</h1>
            <a href='#' className="btn btn-light display-5">KnowMore <i className="fa-solid fa-location-arrow"></i></a>
            </div>
          </div>
          <div className='d-flex'>
            <img src="https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg" alt="" style={{width:"40vw",height:"85vh"}} />
            <div className="slideDetails">
            <h1 style={{fontFamily:'Lobster'}} className="my-4 display-3">Apple iPhone 14 ProMax</h1>
            <a href='#' className="btn btn-light display-5">KnowMore <i className="fa-solid fa-location-arrow"></i></a>
            </div>
          </div>
          <div className='d-flex'>
            <img src="https://m.media-amazon.com/images/I/71to9xkUHrL._SL1500_.jpg" alt="" style={{width:"40vw",height:"85vh"}} />
            <div className="slideDetails">
            <h1 style={{fontFamily:'Lobster'}} className="my-4 display-3">Google Pixel 7 Pro</h1>
            <a href='#' className="btn btn-light display-5">KnowMore <i className="fa-solid fa-location-arrow"></i></a>
            </div>
          </div>
          <div className='d-flex'>
            <img src="https://m.media-amazon.com/images/I/714QNdK8BWL._SL1500_.jpg" alt="" style={{width:"35vw",height:"85vh"}} />
            <div className="slideDetails">
            <h1 style={{fontFamily:'Lobster'}} className="my-4 display-3">Samsung Galaxy Z Fold4 5G</h1>
            <a href='#' className="btn btn-light display-5">KnowMore <i className="fa-solid fa-location-arrow"></i></a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slider