import React from 'react'
import Category from './Category'
import SlideCard from './SlideCard'

const Home = () => {
  return (
      <>
    <section className='home' >
        <div className="container d_flex">
            <Category />
            <SlideCard />
        </div>
        </section>     
 </>
  )
}

export default Home