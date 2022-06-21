import React, { useEffect, useState } from 'react'


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
        fetchPhotos(); //this line will one once
        // when you activate it and delete the for loop
        // for(let i = 0; i < 5; i+=1) {
        //     fetchPhotos();
        // }

        return () => {
            
        }
    }, [])

    return (
        <div>
            <div>
                {album.map((item) => <p key={item.id}>{item.title}</p>)}
            </div>
        </div>
    )
}

export default PhotoList