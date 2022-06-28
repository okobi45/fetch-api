import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

function PhotoView(props) {
  const [info, setInfo] = useState({});
  let { photoId } = useParams();

  useEffect(() => {

    const urlInfo = `https://jsonplaceholder.typicode.com/photos/${photoId}`

    fetch(urlInfo).then((response) => {
        return response.json();
    }).then((data) => {

        setInfo(data)
        console.log(new Date(), data)
    })

    return () => {
      
    };
  }, []);

  const {title, url} = info;

  return (
    <div>
      <Navbar />
      <div className='photoview-container'>
        <img src={url} alt="PhotoView" />
        <p>{title}</p>
        <div className='btn-view'>
          <button><Link to="/photolist">click here to go back</Link></button>
          <button><Link to="/">click here to go Home</Link></button>
        </div>
      </div>
    </div>
  )
}

export default PhotoView