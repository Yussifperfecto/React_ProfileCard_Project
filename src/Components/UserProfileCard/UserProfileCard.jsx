import React from 'react'
import './UserProfileCard.css'
import Profileimage from '../Assets/sherif.JPG'

export const UserProfileCard = () => {
  return (
    <div className='UserCared'>
      <div className="profileCard-up"></div>
       <div className="profileCard-down">
        <img src={Profileimage} alt="" />
        <div className="profileCard-tittle">Sherif Muktar</div>
        <div className="profileCard-description">
          My name is Sherif Mohammed Muktar. I am a seurity officer at Accessbank Ghana limited.
        </div>
        <div className="profileCard-button"><a href="mailto:rahamanyussif@gmail.com">Contact Me</a></div>
        </div>
          
    </div>
  )
}
