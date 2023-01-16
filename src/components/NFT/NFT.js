import "./NFT.css"
import React from 'react'
import ethIcon from '../../images/eth-icon.png'
import { FaHeart } from 'react-icons/fa'
import { IconContext } from 'react-icons';

const NFT = ({ title, owner, owner_img, nft_img, priceEth, priceUsd, like}) => {
  return (
    <div className="nft">
      <div className="nft_image">
        <img src={nft_img} alt="nft_img"/>
      </div>

      <div className="nft_description">
        <p className="nft_description_title">{title}</p>
        <div className="ntf_owner">
          <img src={owner_img} alt="owner_img"/>
          <p className="nft_owner_name">@{owner}</p>
        </div>
        <div className="nft_price">
          <img src={ethIcon} alt="eth_img"/>
          <div className="nft_price_amount">
            <p className="nft_price_amount_eth">{priceEth} ETH</p>
            <p className="nft_price_amount_usd">${priceUsd}</p>
          </div>
          <div className="nft_price_like">
            <IconContext.Provider value={{ className: "like-icon" }}>   
              <FaHeart />
            </IconContext.Provider>
            <p className="nft_price_like_number">{like}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFT
