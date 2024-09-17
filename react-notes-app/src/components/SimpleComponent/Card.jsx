import React from 'react'
import profilePic from '../assets/MyPic4.jpg'
const Card = () => {
  return (
    <div className='card'>
        <img className = "card-img" alt="profile picture" src={profilePic}/>
        <h2 className='card-title'>Mohit</h2>
        <p className='card-text'>This is my card</p>
    </div>
  )
}

export default Card