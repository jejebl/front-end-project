import React from 'react'
import "./Home_TopSellers.css"
import { FiChevronRight } from "react-icons/fi"
import { IconContext } from 'react-icons';
import ethIcon from '../../images/eth-icon.png'
import data from '../data/data_owner'
import { Link } from "react-router-dom"


const Home_TopSellers = () => {

  const topSellers = data.owner.sort((a, b) => b.percentage - a.percentage).slice(0,10);

  return (
    <div className='home_topsellers'>

      <div className='home_topsellers_title_container'>
        <h1>Top Sellers this month</h1>
        <div className='home_topsellers_title_seeall'>
          <Link to={'/sellers'}><p>See all</p></Link>
          <IconContext.Provider value={{ className: "seeAll-icon" }}>
              <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>

      <div className='home_topsellers_display_container'>
        <div className='home_topsellers_display'>
          {topSellers?.map((owner, index) => (
            <Link key={owner.id} to={`/sellersDetail/${owner.id}`}>
              <div key={index} className='home_topsellers_sellers'>
                <div className='home_topsellers_sellers_profil_container'>
                  <p>{index+1}</p>
                  <img src={owner.owner_img} />
                  <div className='home_topsellers_sellers_profil_description'>
                    <h2>@{owner.owner}</h2>
                    <h3>Floor: {owner.floor}ETH</h3>
                  </div>
                </div>
                <div className='home_topsellers_sellers_amount_container'>
                  <div className='home_topsellers_sellers_amount_ETH_container'>
                    <h1>{owner.totalETH} ETH</h1>
                    <img src={ethIcon} alt="ethIcon"/>
                  </div>
                  <div className='home_topsellers_sellers_amount_USD_container'>
                    <h3>${owner.totalUSD}</h3>
                    <p>+{owner.percentage}%</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Home_TopSellers
