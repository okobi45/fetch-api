import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-container'>

        <div className='home-box'>

          <div className='home-content-box1'>
            <h1>Welcome</h1>
            <h2>to</h2>
            <h1>Fetch Api App</h1>
          </div>

          <div className='home-content-box2'>
            <h4>Getting Started</h4>
            <Link to="/photolist"><button>click here</button></Link>
          </div>

        </div>
    </div>
  )
}

export default Home