import React from 'react'
import "./Home_Featured.css"
import { FiChevronRight } from "react-icons/fi"
import {IoChevronForwardCircleOutline} from "react-icons/io5"
import { IoChevronBackCircleOutline } from "react-icons/io5"
import { IconContext } from 'react-icons';
import NFT from '../NFT/NFT';
import data from '../data/data_nft'
import { Link } from 'react-router-dom';


const Home_Featured = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction==='left'){
      current.scrollLeft -= 560;
    } else {
      current.scrollLeft += 560;
    }
  }

  return (
    <div className='home_featured'>
      <div className='home_featured_title_container'>
        <h1>Featured</h1>
        <div className='home_featured_seeAll'>
          <Link to={'/marketplace'}><p>See all</p></Link>
          <IconContext.Provider value={{ className: "seeAll-icon" }}>
              <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>

      <div className='home_featured_display_container'>
        <div className='home_featured_display' ref={scrollRef}>
          {data.nft?.map((nft, index) => (
              <div key={nft.id} className='home_featured_nft'>
                <Link to={`/nftDetail/${nft.id}`}><NFT key={nft.id} title={nft.title} owner={nft.owner} owner_img={nft.owner_img} nft_img={nft.nft_img} priceEth={nft.priceEth} priceUsd={nft.priceUsd} like={nft.like}/></Link>
              </div>
            ))}
        </div>
      </div>

      <div className='home_featured_arrows'>
        <IconContext.Provider value={{className: "arrow-icon" }}>
          <IoChevronBackCircleOutline onClick={() => scroll('left')}/>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "arrow-icon" }}>
          <IoChevronForwardCircleOutline onClick={() => scroll('right')}/>
        </IconContext.Provider>
        </div>

    </div>
  )
}

export default Home_Featured
