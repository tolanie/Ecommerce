import React from 'react'
import Category from './Category'
import SlideCard from './SlideCard'
import Slider from './Slider'

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