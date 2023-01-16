import React from 'react'
import { useParams } from 'react-router'
import data_owner from '../data/data_owner'
import "./SellersDetail.css"
import {BsShare} from "react-icons/bs";
import { IconContext } from 'react-icons';
import Marketplace from '../Marketplace/Marketplace';

function SellersDetail(props) {
  
  window.scrollTo(0, 0)

  const ownerId = useParams()

  const thisOwner = data_owner.owner.find(owner => owner.id === ownerId.ownerId);

  return (
    <div>
      <div className='sellersDetail'>
        <div className='sellersDetail_container'>
          <div className='sellersDetail_profil_image_container'>
            <img className="nft_show" src={thisOwner.nft_show} alt='nft_show'/>
            <img className="owner_img" src={thisOwner.owner_img} alt='owner_img'/>
          </div>
          <div className='sellersDetail_info_container'>
            <div className='sellersDetail_info_description_container'>
              <h1>@{thisOwner.owner}</h1>
              <p>{thisOwner.owner} is a creator minimalistic bold graphic and digital work.</p>
              <div className='sellersDetail_info_description_button_container'>
                <button className='button_follow'>Follow</button>
                <button className='button_message'>Message</button>
                <button className='button_share'>
                  <IconContext.Provider value={{ className: "share_icon" }}>
                      <BsShare />
                  </IconContext.Provider>
                  </button>
              </div>
            </div>
            <div className='sellersDetail_info_stats_container'>
              <div className='sellersDetail_info_stats_left_container'>
                <p>Followers</p>
                <p>Following</p>
                <p>Earned</p>
                <p>Address</p>
              </div>
              <div className='sellersDetail_info_stats_right_container'>
                <p>27,5K</p>
                <p>1,6K</p>
                <p>3,012 ETH</p>
                <p>0x394...da91</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marketplace owner={thisOwner.owner}/>
    </div>
  )
}

export default SellersDetail
