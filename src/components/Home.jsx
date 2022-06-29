import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home-container'>

            <div className='home-nav'>
                <h1>flipStack</h1>
                <nav className='nav-content'>
                    <span className='nav-item'>About</span>
                    <span className='nav-item'>Contact</span>
                    <span className='nav-item'>Login</span>
                    <span className='nav-item'>SignUp</span>
                </nav>
            </div>


            <div className='home-box'>

                <div className='home-box-content'>
                    <h3>Welcome to flipStack Photo App</h3>
                    <h1>we are commited and dedicated to keeping your
                        precious cherished moments safe, accessible and organised
                        on the go.</h1>

                    <div className='btn-box'>
                        <Link to="/photolist">
                            <button className='btn'>VIEW PHOTOS</button>
                        </Link>
                        <Link to="/photolist">
                            <button className='btn'>MORE ABOUT US</button>
                        </Link>
                    </div>
                </div>

            </div>


            <footer className='footer'>
                <span className='footer-item'>flipStack</span>
                <span className='footer-item'>Photo App &copy; 2022</span>
            </footer>
        </div>
    )
}

export default Home