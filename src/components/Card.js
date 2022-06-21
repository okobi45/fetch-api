import React from 'react'

function Card(props) {
  return (
    <div className='content-items'>
        <img src={props.thum} alt="thumbnail" /> 
        <p>{props.title}</p>   
    </div>
  )
}

export default Card