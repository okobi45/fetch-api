import React from 'react'
import { FaBatteryFull } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa';
import { FaSignal } from 'react-icons/fa';


function Navbar() {

    let instant = new Date();
    let time = instant.getHours() + ":" + instant.getMinutes();

    return (
        <div className='header'>
            <p>{time}</p>
            <div className="icon">
                <span className='icon-item'><FaWifi /></span>
                <span className='icon-item'><FaSignal /></span>
                <span className='icon-item'><FaBatteryFull /></span>   
            </div>
        </div>
    )
}

export default Navbar