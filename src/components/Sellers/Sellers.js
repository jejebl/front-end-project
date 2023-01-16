import React, { useState } from 'react'
import "./Sellers.css"
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";
import data from '../data/data_owner'
import Select from "react-select";
import { Link } from 'react-router-dom';

const Sellers = () => {
  
  window.scrollTo(0, 0)

  const [filter, setFilter] = useState("filter");
  const [search, setSearch] = useState("");

  const options = [
    { value: "filter", label: "Filters"},
    { value: "bestSellers", label: "Best Sellers"},
    { value: "percentage", label: "Best Sellers this month"}
  ];

  const handleFilter = (e) => {
    setFilter(e.value);
  }
  
  const ownerBestSellers = [...data.owner].sort(function (a,b) {
    return b.totalETH - a.totalETH;
  });

  const ownerPercentage = [...data.owner].sort(function (a,b) {
    return b.percentage - a.percentage;
  });

  let ownerSearch = filterItems([...data.owner], search);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    ownerSearch = filterItems([...data.owner], search);
  }

  function filterItems(arr, query) {
    return arr.filter((el) => el.owner.toLowerCase().startsWith(query.toLowerCase()));
  }

  function showOwner(index, owner) {
    return (
      <div key={owner.id} className='sellers_item'>
        <div className='sellers_item_profil_container'>
          <div className='sellers_owner_id'>{index+1}</div>
          <Link to={`/sellersDetail/${owner.id}`}><img alt='owner_img' src={owner.owner_img} /></Link>
          <Link to={`/sellersDetail/${owner.id}`}><div className='sellers_owner_name'>@{owner.owner}</div></Link>
          <button className='sellers_button_follow'>Follow</button>
        </div>
        <div className='sellers_item_stats_container'>
          <div className='sellers_owner_totalUSD'>{owner.totalUSD} USD</div>
          <div className='sellers_owner_percentage'>{owner.percentage} %</div>
          <div className='sellers_owner_floor'>Floor: {owner.floor} ETH</div>
        </div>
      </div>
    )
  }

  return (
    <div className='sellers_container'>

      <div className='sellers_nav_container'>
        <Select className="sellers_filter_select" onChange={handleFilter} options={options}/>
        
        <div className='sellers_search_container'>
          <input value={search} onChange={handleSearch} className="sellers_searchText" placeholder='Search sellers...'/>
          <div className='sellers_searchIcon'>
            <IconContext.Provider value={{ className: "search_icon" }}>
                <FiSearch />
            </IconContext.Provider>
          </div>
        </div>
      </div>


      <div className='sellers_list_container'>
        <div className='sellers_list_display'>
          {search!=="" ? 
            ownerSearch.map((owner, index) => (
              showOwner(index, owner)
            ))
          : filter === "filter" ? 
            data.owner?.map((owner, index) => (
              showOwner(index, owner)
            ))
          : filter === "bestSellers" ?
            ownerBestSellers.map((owner, index) => (
              showOwner(index, owner)
            ))
          : filter ==="percentage" &&
            ownerPercentage.map((owner, index) => (
              showOwner(index, owner)
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Sellers
