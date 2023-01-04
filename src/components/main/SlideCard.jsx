import React from 'react';
// import Sdata from "./Sdata"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    appendDots: (dots) => {
      return <ul style={{margin:"0px"}}>{dots} </ul>
    }
  };
 
  const Sdata = [

    
    {
        id: 1,
        title: "Buy our brand at affordable rate",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nihil!",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQF4zdedd3xcm6YxMvvR6VkcuYbRQnIFaQA&usqp=CAU" 
    },

    {
        id:2,
        title: "Buy our brand at affordable rate",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nihil!",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyiQebHCXt5E1TasxOXlEesLo1zry-uhPTug&usqp=CAU" 
    },
    {
        id:3,
        title: "Buy our brand at affordable rate",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nihil!",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3fMpkJhLlcR1i57_e1SlKWHnIwlhfTlNPWA&usqp=CAU" 
    },

    {
        id:4,
        title: "Buy our brand at affordable rate",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nihil!",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQF4zdedd3xcm6YxMvvR6VkcuYbRQnIFaQA&usqp=CAU" 
    },
]
        return (
              <>
                    <Slider {...settings}>

               {Sdata.map((value, index) => {
                 return(
                   <div className="box d_flex top" key={index}>
                     <div className="left">
                       <h1>{value.title}</h1>
                       <p>{value.about} </p>
                       <button className="btn-primary">Visit Collections</button>
                     </div>

                     <div className="right">
                       <img src={value.cover} alt="" />
                     </div>
                   </div>
              )
    })}
      </Slider>
    </>
  )
}

export default SlideCard

//  const SlideCard = () => {

//   let data =[
//     {
//       cateImg: "https://m.media-amazon.com/images/I/71RUxoV0VjL._AC_SL1500_.jpg",
//       cateName: "Fashion",
//   },
//   {
//       cateImg: "https://pimallmetro.com/wp-content/uploads/2022/01/electronic-gadgets.jpeg",
//       cateName: "Electronics",
//   }
//   ]
//   return (
//     <>
//     {data.map((value, index) => {
//       console.log('ooooooooooooooooooooo',value);
//       return(

//         <div className="box d_flex top" key={index}>
//           <div className="left">
//             <h1>{value.cateName}</h1>
//           </div>
//         </div>
//       )
//     })}
//     </>
//   )
// }

// export default SlideCard