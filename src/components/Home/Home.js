import React from 'react'
import Home_Discover from './Home_Discover'
import Home_CreateAndSell from './Home_CreateAndSell'
import Home_Featured from './Home_Featured'
import Home_TopSellers from './Home_TopSellers'
import Home_Video from './Home_Video'
import Home_Join from './Home_Join'

const Home = () => {
  return (
    <div>
      <Home_Discover />
      <Home_CreateAndSell />
      <Home_Featured />
      <Home_TopSellers />
      <Home_Video />
      <Home_Join />
    </div>
  )
}

export default Home
