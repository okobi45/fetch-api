import React, { useEffect, useState } from 'react'
import Card from './Card';


function PhotoList() {
    const [album, setAlbum] = useState([]);
    useEffect(() => {

        function fetchPhotos() {
            const photoUrl = "https://jsonplaceholder.typicode.com/photos";

            fetch(photoUrl).then((response) => {
                return response.json();
            }).then((data) => {

                setAlbum(data)
                console.log(new Date(), data)
            })
        }
        //fetchPhotos(); this line will one once
        // when you activate it and delete the for loop
        for(let i = 0; i < 5; i+=1) {
            fetchPhotos();
         }

        return () => {
            
        }
    }, [])

    let value = album.map((item) => 
    <Card key={item.id} 
    title={item.title} 
    url={item.url} 
    thum={item.thumbnailUrl} />)

    return (
        <div className='container'>
            <div className='header'>
                <p>3:31</p>
                <div className="icon">
                    <span className='icon-item'>wifi</span>
                    <span className='icon-item'>Signal</span>
                    <span className='icon-item'>Battery</span>
                </div>
            </div>
            <div className='top-header'><h1>Photo Thumbnail and Title</h1></div>
            <div className='content'>
                {value}
            </div>
        </div>
    )
}

export default PhotoList