import React from 'react'

import Slider from "react-slick";


const FlashCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,

  };

  const products = [
    {
        id: 1,
        discount: 40,
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRphnlbYe9eaqD-gbzcbd1Cg8-p1AL7VDYRBQ&usqp=CAU",
        name:"Smart watch",
        price: 100,
    },
    {
        id: 2,
        discount: 50,
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJ9xXjFTAsH5ILRFl7_gZp8L_vZWQ6ARYBA&usqp=CAU",
        name:"Shoes",
        price: 100,
    },
    {
        id: 3,
        discount: 50,
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXrT-2dtoj9NoCrzMTvbIigQhakTEr_VYxg&usqp=CAU",
        name:"Caps",
        price: 100,
    },
    {
        id: 4,
        discount: 50,
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXG1CW6tkHh3Ds_b0upFtp0yrh3aHgZH5ONQ&usqp=CAU",
        name:"Shirt",
        price: 100,
    },
    {
        id: 5,
        discount: 50,
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-kNum7t6fB3xmfy_Wk8qem9YO4pyjQ4VH1Q&usqp=CAU",
        name:"Skirts",
        price: 100,
    },
    {
        id: 6,
        discount: 50,
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUCY44ESSoDftPuVK80OjmV-e0M7UsK8vXDbv531K4wUP0Jcf5UwT4h4RkTfvuLw81Iws&usqp=CAU",
        name:"Trousers",
        price: 100,
    },
]
  return (
    <>
            {/* <Slider {...settings}> */}
    {products.map((products) => {
        return(
        <div className="box">
          <div className="product mtop">
            <div className="img">
              <span className='discount'>{products.discount}% off</span>
              <img src={products.cover} alt=''/>
              <div className="product-like">
                <label>0</label> <br/>
                <i class="far fa-heart"></i>
                  </div>
            </div>
            <div className="product-details">
              <h3>{products.name}</h3>
              <div className="rate">
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className="price">
                <h4>{products.price}.00</h4>
                <button>
                <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
       )
       })}
         {/* </Slider> */}

    </>
  )
}

export default FlashCards