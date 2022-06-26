import React, { useEffect, useState } from 'react'
import Card from './Card';
import Navbar from './Navbar';



function PhotoList(props) {
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
        fetchPhotos(); //this line will one once
        // when you activate it and delete the for loop
        // for(let i = 0; i < 5; i+=1) {
        //     fetchPhotos();
        //  }

        return () => {
            
        }
    }, [])

    

    return (
        <div className='container'>
            <Navbar />
            <div className='top-header'><h1>Photo Thumbnail and Title</h1></div>
            <div className='content'>
                {album.map((item) => <Card key={item.id} item={item} /> )}
            </div>
        </div>
    )
}

export default PhotoList