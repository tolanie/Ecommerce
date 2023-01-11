import React from 'react'
import Category from './Category'
import Slider from './Slider'
import "./Home.css"

const Home = () => {
  return (
      <>
    <section className='home' >
        <div className="container d_flex">
            <Category />
            <Slider />
            {/* <SlideCard/> */}
        </div>
        </section>     
 </>
  )
}

export default Home