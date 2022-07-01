import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Login from './Tempoary/auth/Login2'
import SignUp from './Tempoary/auth/SignUp2'
import {HiOutlineMenu} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'

function Homeloginbackup() {
    const [login, setLogin] = useState(false)
    const [reg, setReg] = useState(false)
    const [show, setShow] = useState(false)
    return (
        <div className='home-container'>

            <div className='home-nav'>
                <h1>flipStack</h1>
                <nav className={show ? 'nav-content show': 'nav-content'}>
                    <Link to="/#"><span className='nav-item'>About</span></Link>
                    <Link to="/#"><span className='nav-item'>Contact</span></Link>
                    <a ><span className='nav-item' onClick={()=>setLogin(true)}> Login</span></a>
                    {login && <Login login={login} setLogin={setLogin}/>}
                    <a><span className='nav-item' onClick={()=>setReg(true)}>SignUp</span></a>
                    {reg && <SignUp reg={reg} setReg={setReg}/>}
                </nav>
               {show ?  <MdClose className='menu-icon' onClick={()=>setShow(!show)}/>:  <HiOutlineMenu className='menu-icon' onClick={()=>setShow(!show)}/>}
                
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

export default Homeloginbackup