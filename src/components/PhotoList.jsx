import React, { useEffect, useState } from 'react'
import Card from './Card';
import Navbar from './Navbar';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';


function PhotoList(props) {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/malogin')
    }
    const navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)

        if (authToken) {
            navigate('/photolist')
        }
        if (!authToken) {
            navigate('/masignup')
        }
    }, [])


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

    // const [user, loading, error] = useAuthState(auth);

                // <div>welcome{user?.email}</div>
                // <p onClick={()=>auth.signOut} style={{color: "black"}}>Signout</p>

    return (
        <div className='container'>
            <Navbar />
            <div className='top-header'><h1>Photo Thumbnail and Title</h1><p onClick={handleLogout}>Log out</p></div>
            <div className='content'>
                {album.map((item) => <Card key={item.id} item={item} /> )}
            </div>
        </div>
    )
}

export default PhotoList