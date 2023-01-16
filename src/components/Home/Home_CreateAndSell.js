import React from 'react'
import "./Home_CreateAndSell.css"

const Home_CreateAndSell = () => {
  return (
    <div className='home_createAndSell'>
      <div className='home_create_container'>
        <h1>Create and sell your NFTs</h1>

        <div className='home_create_div'>
          <h2>Create</h2>
          <p>Creative building blocks for BJ.</p>
        </div>

        <div className='home_create_separation' />

        <div className='home_create_div'>
          <h2>Collect</h2>
          <p>Unearth NFTs for your growing collection.</p>
        </div>

        <div className='home_create_separation' />

        <div className='home_create_div'>
          <h2>Sell</h2>
          <p>Your NFTs will shine in our marketplace.</p>
        </div>
      </div>
    </div>
  )
}

export default Home_CreateAndSell
