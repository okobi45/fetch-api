import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaBatteryFull } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa';
import { FaSignal } from 'react-icons/fa';



function Navbar() {
    const [ time, setTime] = useState(new Date());

    function swift() {
        
        setTime(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(swift, 1000);
        return function updateFix() {
          clearInterval(timerId);
        };
      }, []);

    return (
        <div className='header'>
            <p>{time.toLocaleTimeString()}</p>
            <div className="icon">
                <span className='icon-item'><FaWifi /></span>
                <span className='icon-item'><FaSignal /></span>
                <span className='icon-item'><FaBatteryFull /></span>   
            </div>
        </div>
    )
}

export default Navbar