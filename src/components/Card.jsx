import React from 'react'

function Card(props) {

  return (
    <div className='content-items'>
        <img src={props.item.thumbnailUrl} alt="thumbnail" /> 
        <p>{props.item.title}</p>
    </div>
  )
}

export default Card