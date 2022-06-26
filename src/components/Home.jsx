import React from 'react'

function Home() {
  return (
    <div className='home-container'>
        <div className='home-nav'>
            <h1>flipStack</h1>
            <nav>
                <span>About</span>
                <span>Contact</span>
            </nav>
        </div>

        <div className='box'>
            <div className='box-content-1'>
                <p>Welcome to flipStack Photo App</p>
            </div>

            <div className='box-content-2'>
                <p>we are commited and dedicated to keeping your 
                precious cherished moments safe, accessible and organised 
                on the go.</p>
            </div>

            <div className='box-content-3'>
                <button className='btn-view'>VIEW PHOTOS</button>
                <button className='btn-more'>MORE ABOUT US</button>
            </div>
        </div>

        <footer>
            <span>flipStack</span>
            <span>Photo App 2022</span>
        </footer>
    </div>
  )
}

export default Home