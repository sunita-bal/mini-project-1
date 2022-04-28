import React from 'react'


function Cards(props) {
  return (
      <>
      <div className='card'>
          
          
        <img src={props.item.img} className='card-img'/>
        
        <div className='upper-card'>
            <img src={props.item.logo} className='map-logo'/>
            <h4>{props.item.location}</h4>
            <h5 className='map'>View On Google Map</h5>
        </div>
       
        
        <div className='inner-card'>
        <h1 className='card-title'>{props.item.title}</h1>
        <h4 className='card-date'>{props.item.date}</h4>
        <p>{props.item.text}</p>
        </div>
       
    </div>
    
       
    
       
        </>
     
      
    
  )
}

export default Cards