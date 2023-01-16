import React, { useState } from 'react'
import { FiSearch, FiLock, FiMenu } from "react-icons/fi";
import "./Header.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom"

const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const [toggleSearch, setToggleSearch] = useState(false);

  const handleToggleSearch = () => {
    setToggleSearch((prevToggle) => !prevToggle);
  }

  return (
    <div className='header'>
      
      <div className='header_left'>
        <div className='header_left_bj'>
          <Link to={'/'}>BJ</Link>
        </div>
        <div className='header_left_section'>
          <div className='header_left_section_items'><Link to={'/marketplace'}>Marketplace</Link></div>
          <div>/</div>
          <div className='header_left_section_items'><Link to={'/sellers'}>Sellers</Link></div>
        </div>
      </div>

      <div className='header_right'>
        {!toggleSearch ? (
          <div className='header_right_items-1' onClick={() => handleToggleSearch()}>
            <IconContext.Provider value={{ className: "search-icon" }}>
                <FiSearch />
            </IconContext.Provider>
          </div>
        ) : 
          <div className='header_right_search_container'>
            <input className="header_right_search_searchText" placeholder='Search Text...'/>
            <div onClick={handleToggleSearch} className='header_right_search_searchIcon'>
              <IconContext.Provider value={{ className: "search-icon" }}>
                  <FiSearch />
              </IconContext.Provider>
            </div>
          </div>
        }
        <div className='header_right_items-2'>
          <IconContext.Provider value={{ className: "lock-icon" }}>
              <FiLock />
          </IconContext.Provider>
          </div>
        <div className='header_right_items-3'>
          Sign in
        </div>
        <div className='header_right_items_menu_smallscreen_container'>
          <IconContext.Provider value={{ className: "toggleMenu" }}>
            <FiMenu onClick={() => setToggleMenu(true)}/>
          </IconContext.Provider>
          {toggleMenu && (
            <div className='header_right_items_menu_container slide-bottom'>
              <div className='bjMenuSmallScreen'>
                <Link to={'/'}>BJ</Link>
              </div>
              <IconContext.Provider value={{ className: "toggleMenu" }}>
                <FiMenu onClick={() => setToggleMenu(false)}/>
              </IconContext.Provider>
              <ul className='header_right_items_menu_link'>
                <Link to={'/marketplace'}><li onClick={() => setToggleMenu(false)}>Marketplace</li></Link>
                <Link to={'/sellers'}><li onClick={() => setToggleMenu(false)}>Sellers</li></Link>
              </ul>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Header
