import React, { useState } from 'react'
import "./Marketplace.css"
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";
import NFT from '../NFT/NFT';
import data from '../data/data_nft'
import Select from "react-select";
import { Link } from 'react-router-dom';

const Marketplace = (props) => {
  
  window.scrollTo(0, 0)

  let dataOfOwner = data;

  /*If an owner is pass in props then dataOfOwner get the nft of the owner, else dataOfOwner get all the nft*/
  if(Object.keys(props).length !== 0) {
    dataOfOwner = [...data.nft].filter(nft => nft.owner === props.owner)
  } else {
    dataOfOwner = dataOfOwner.nft
  }

  const [filter, setFilter] = useState("filter");
  const [search, setSearch] = useState("");

  const options = [
    { value: "filter", label: "Filters"},
    { value: "asc", label: "Ascending price"},
    { value: "desc", label: "Descending price"},
    { value: "like", label: "Most liked"}
  ];

  const handleFilter = (e) => {
    setFilter(e.value);
  }

  const nftAsc = [...dataOfOwner].sort(function (a,b) {
    return a.priceEth - b.priceEth;
  });
  
  const nftDesc = [...dataOfOwner].sort(function (a,b) {
    return b.priceEth - a.priceEth;
  });

  const nftLiked = [...dataOfOwner].sort(function (a,b) {
    return b.like - a.like;
  });

  let nftSearch = filterItems([...dataOfOwner], search);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    nftSearch = filterItems([...dataOfOwner], search);
  }

  function filterItems(arr, query) {
    return arr.filter((el) => el.title.toLowerCase().startsWith(query.toLowerCase()));
  }

  return (

    <div className='marketplace_container'>

      <div className='marketplace_nav_container'>
        <Select className="marketplace_filter_select" onChange={handleFilter} options={options}/>
        
        <div className='marketplace_search_container'>
          <input value={search} onChange={handleSearch} className="marketplace_searchText" placeholder='Search NFT...'/>
          <div className='marketplace_searchIcon'>
            <IconContext.Provider value={{ className: "search_icon" }}>
                <FiSearch />
            </IconContext.Provider>
          </div>
        </div>
      </div>


      <div className='marketplace_nft_container'>
        <div className='marketplace_nft_display'>
          {search!=="" ? 
            nftSearch.map((nft, index) => (
              <Link key={nft.id} to={`/nftDetail/${nft.id}`}><NFT title={nft.title} owner={nft.owner} owner_img={nft.owner_img} nft_img={nft.nft_img} priceEth={nft.priceEth} priceUsd={nft.priceUsd} like={nft.like}/></Link>
            ))
          : filter === "filter" ? 
            dataOfOwner?.map((nft, index) => (
              <Link key={nft.id} to={`/nftDetail/${nft.id}`}><NFT title={nft.title} owner={nft.owner} owner_img={nft.owner_img} nft_img={nft.nft_img} priceEth={nft.priceEth} priceUsd={nft.priceUsd} like={nft.like}/></Link>
            ))
          : filter === "asc" ?
            nftAsc.map((nft, index) => (
              <Link key={nft.id} to={`/nftDetail/${nft.id}`}><NFT title={nft.title} owner={nft.owner} owner_img={nft.owner_img} nft_img={nft.nft_img} priceEth={nft.priceEth} priceUsd={nft.priceUsd} like={nft.like}/></Link>
            ))
          : filter === "desc" ?
            nftDesc.map((nft, index) => (
              <Link key={nft.id} to={`/nftDetail/${nft.id}`}><NFT title={nft.title} owner={nft.owner} owner_img={nft.owner_img} nft_img={nft.nft_img} priceEth={nft.priceEth} priceUsd={nft.priceUsd} like={nft.like}/></Link>
            ))
          : filter ==="like" &&
            nftLiked.map((nft, index) => (
              <Link key={nft.id} to={`/nftDetail/${nft.id}`}><NFT title={nft.title} owner={nft.owner} owner_img={nft.owner_img} nft_img={nft.nft_img} priceEth={nft.priceEth} priceUsd={nft.priceUsd} like={nft.like}/></Link>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Marketplace
