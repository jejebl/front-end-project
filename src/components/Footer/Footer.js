import React from 'react'
import './Footer.css'
import { AiFillInstagram, AiFillGoogleCircle, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer_container'>

        <div className='footer_top_container'>
          
          <div className='footer_top_left_container'>
            <h1>Our platform is trusted by millions, & features an portfolio of financial product offerings.</h1>
            <h2>bjmarketplace@gmail.com</h2>
            <h3>Subscribe And Get News</h3>
            <div className='footer_top_left_subscribe_container'>
              <input className="footer_top_left_subscribeText" placeholder='Your Email...'/>
              <div className='footer_top_left_subscribeIcon'>
                <IconContext.Provider value={{ className: "subscribe_icon" }}>
                    <IoIosSend />
                </IconContext.Provider>
              </div>
            </div>
          </div>

          <div className='footer_top_right_container'>

            <div className='footer_top_right_top_container'>
              <Link to={'/marketplace'}><div className='footer_top_right_top_items'>Marketplace</div></Link>
              <div className='footer_top_right_top_items'>/</div>
              <Link to={'/sellers'}><div className='footer_top_right_top_items'>Sellers</div></Link>
            </div>

            <div className='footer_top_right_bottom_container'>
              <IconContext.Provider value={{ className: "socialmedia_icon" }}>
                <AiFillInstagram />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "socialmedia_icon" }}>
                <AiFillTwitterCircle />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "socialmedia_icon" }}>
                <AiFillLinkedin />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "socialmedia_icon" }}>
                <AiFillGithub />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "socialmedia_icon" }}>
                <AiFillGoogleCircle />
              </IconContext.Provider>
            </div>

          </div>
        </div>

        <div className='footer_bottom_container'>
          <div className='footer_bottom_left_container'>
            <p>Privacy policy</p>
            <p>Term of service</p>
            <p>Language</p>
          </div>
          <h3>2022 Jeremie Blanc</h3>
        </div>

      </div>
      
    </div>
  )
}

export default Footer
