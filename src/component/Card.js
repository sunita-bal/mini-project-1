import React from 'react'

import star from '../images/Star1.png'
function Card(props) {
  let badgeText
  if(props.item.openSpots === 0){
    badgeText = " SOLD OUT "
  }
  else if(props.item.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <div className='card'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
        <img src={props.item.coverImg} className = 'card-img' />
        <div className='card-line'>
           <img src={star} className = 'star-img'/>
           <span> {props.item.status.rating} </span>
           <span className='grey'> ({props.item.status.review}) # </span>
           <span className='grey'> {props.item.location} </span>
        </div>
        <p className='card-title'>{props.item.title}</p>
        <p><span className='bold'>From ${props.item.price}</span> / person</p>
    </div>
  )
}

export default Card