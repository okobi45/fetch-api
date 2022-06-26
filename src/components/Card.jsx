import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {

 const {item} = props;
  return (
    <Link to={`/photolist/${item.id}`} id='content-link'> 
      <div className='content-items'>
        <img src={item.thumbnailUrl} alt="thumbnail" /> 
        <p>{item.title}</p>
      </div>
    </Link>
  )
}

export default Card