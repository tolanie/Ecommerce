import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/main/Home'

const Pages = ({products}) => {
  return (
    <>
        <Home />
        <FlashDeals products = {products} />
    </>
  )
}

export default Pages