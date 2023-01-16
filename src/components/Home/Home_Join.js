import React from 'react'
import "./Home_Join.css"
import data_owner from '../data/data_owner'
import { Link } from "react-router-dom"

const Home_Join = () => {

  const owners_part1 = data_owner.owner.slice(0,7);
  const owners_part2 = data_owner.owner.slice(7,13);

  return (
    <div className='home_join_container'>

      <div className='home_join_title_container'>
        <h1>BJ is for everyone</h1>
        <h2>Join the millions of creators, collectors, and curators who are on this journey with you.</h2>
      </div>

      <div className='home_join_display_container'>

          <div className='home_join_part1_container'>
            {owners_part1?.map((owner, index) => (
              <Link key={owner.id} to={`/sellersDetail/${owner.id}`}>
                <div key={index} className='home_join_image'>
                  <img src={owner.owner_img} />
                </div>
              </Link>
            ))}
          </div>
          <div className='home_join_part2_container'>
            {owners_part2?.map((owner, index) => (
              <Link key={owner.id} to={`/sellersDetail/${owner.id}`}>
                <div key={index} className='home_join_image'>
                  <img src={owner.owner_img} />
                </div>
              </Link>
            ))}
          </div>

      </div>

      <button className='home_join_button'>Get Started</button>

    </div>
  )
}

export default Home_Join
