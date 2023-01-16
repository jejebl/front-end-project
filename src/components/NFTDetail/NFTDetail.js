import React from 'react'
import { useParams } from 'react-router'
import data_nft from '../data/data_nft'
import data_owner from '../data/data_owner'
import "./NFTDetail.css"
import ethIcon from '../../images/eth-icon.png'
import { Link } from 'react-router-dom';
import Marketplace from '../Marketplace/Marketplace'


function NFTDetail(props) {
  
  window.scrollTo(0, 0)

  const nftId = useParams()

  const thisNFT = data_nft.nft.find(nft => nft.id === nftId.nftId);

  
  function findOwnerId(nftId) {
    const owner = data_owner.owner.find(owner => owner.owner === thisNFT.owner)
    return owner.id
  }

  return (
    <div>
      <div className='nftdetail'>
        <div className='nftdetail_container'>
          <img  className="nftdetail_nftimg" src={thisNFT.nft_img} alt="nft_img"/>
          <div className='nftdetail_desciption_container'>
            <div className='nftdetail_desciption_part1_container'>
              <h1>{thisNFT.title}</h1>
              <Link key={findOwnerId(thisNFT.id)} to={`/sellersDetail/${findOwnerId(thisNFT.id)}`}>
                <div className='nftdetail_desciption_part1_owner_container'>
                  <img src={thisNFT.owner_img} alt="owner_img"/>
                  <h2>created by : @{thisNFT.owner}</h2>
                </div>
              </Link>
            </div>
            <div className='nftdetail_desciption_part2_container'>
              <div className='nftdetail_desciption_part2_part1_container'>
                <div className='nftdetail_desciption_part2_part1_left_container'>
                  <p className='nftdetail_description_price_title'>Price</p>
                  <div className='nftdetail_desciption_part2_part1_ethPrice_container'>
                    <img src={ethIcon} alt="eth_img"/>
                    <div className='nftdetail_desciption_part2_part1_ethPrice_price'>
                      <p className='nftdetail_priceEth'>{thisNFT.priceEth} Eth</p>
                      <p className='nftdetail_priceUsd'>=${thisNFT.priceUsd}</p>
                    </div>
                  </div>
                </div>
                <div className='nftdetail_desciption_part2_part1_right_container'>
                  <p className='nftdetail_description_price_title'>Highest floor bid</p>
                    <div className='nftdetail_desciption_part2_part1_ethPrice_container'>
                      <img src={ethIcon} alt="eth_img"/>
                      <div className='nftdetail_desciption_part2_part1_ethPrice_price'>
                      <p className='nftdetail_priceEth'>{thisNFT.priceEth} Eth</p>
                      <p className='nftdetail_priceUsd'>=${thisNFT.priceUsd}</p>
                      </div>
                    </div>
                </div>
              </div>
              <div className='nftdetail_desciption_part2_part2_container'>
                <p>Last sale price:</p>
                <img src={ethIcon} alt="eth_img"/>
                <p>{thisNFT.lastPrice} Eth</p>
              </div>
              <div className='nftdetail_desciption_part2_part3_container'>
                <button className='nftdetail_desciption_part2_part3_buynow'>Buy Now For {thisNFT.lastPrice} Eth</button>
                <button className='nftdetail_desciption_part2_part3_placebid'>Place Bid</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marketplace />
    </div>
  )
}

export default NFTDetail
