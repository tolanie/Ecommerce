import React from 'react'
import FlashCards from './FlashCards'

const FlashDeals = ({products}) => {
  return (
    <>
    <section className='flash background'>
    <div className="container f_flex">
        <di className="heading f_flex">
        <i className='fa fa-bolt'></i>
        <h1> FlashDeals</h1>
        </di>
        <FlashCards products = {products}/>
    </div>
    </section>
    </>
  )
}

export default FlashDeals