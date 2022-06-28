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
          <Link to="/photolist"><button>click here to go back</button></Link>
          <Link to="/"><button>click here to go Home</button></Link>
        </div>
      </div>
    </div>
  )
}

export default PhotoView