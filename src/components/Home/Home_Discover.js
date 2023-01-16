import React from 'react'
import "./Home_Discover.css";
import { FiPlayCircle } from "react-icons/fi";
import { IconContext } from 'react-icons';
import nft_image_0 from '../../images/nft_image_0.png';
import data_owner from '../data/data_owner';
import { Link } from 'react-router-dom';

const nft = nft_image_0;

const owner = data_owner.owner.find(owner => owner.id === '1');


const Home_part1 = () => {
  
  return (
    <div className='home_part1_container'>

      <div className='home_part1_discover'>
        <div className='home_part1_discover_title'>
          <h1>Discover, collect, & sell NFTs</h1>
        </div>

        <div className='home_part1_discover_text'>
          <p>Discover the Most Premium, Unique and Exclusive NFT Collections</p>
        </div>

        <div className='home_part1_discover_button'>
        <Link to={'/marketplace'}><button className='home_part1_discover_button_explore'>Explore</button></Link>
          <button className='home_part1_discover_button_create'>Create</button>
        </div>

        <div className='home_part1_discover_space'/>

        <div className='home_part1_discover_learnmore_container'>
            <IconContext.Provider value={{ className: "play-icon" }}>
              <FiPlayCircle />
            </IconContext.Provider>
          <p>Learn more about BJ</p>
        </div>
      </div>

      <div className='home_part1_example_container'>
        <div className='home_part1_example' style={{backgroundImage: `url(${nft})`}}>
          <div className='home_part1_example_profil_container'>
            <div className='home_part1_example_profil_photo'>
            <Link key={owner.id} to={`/sellersDetail/${owner.id}`}><img src={owner.owner_img} alt="nft_owner"/></Link>
            </div>

            <div className='home_part1_example_profil_description'>
              <Link key={owner.id} to={`/sellersDetail/${owner.id}`}><h1>@{owner.owner}</h1></Link>
              <p>created Machine one hour ago (2 000 views)</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home_part1
