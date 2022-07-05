import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import {HiOutlineMenu} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'
import MaLogin from './MaLogin'
import MaSignUp from './MaSignUp'


function Home() {
    const [login, setLogin] = useState(false)
    const [reg, setReg] = useState(false)
    const [show, setShow] = useState(false)
    const [signin, setSignin] = useState(false)
    const [signup, setSignup] = useState(false)
    return (
        <div className='home-container'>

            <div className='home-nav'>
                <h1>flipStack</h1>
                <nav className={show ? 'nav-content show': 'nav-content'}>
                    
                    <Link to="/malogin" id='content-link'><span className='nav-item' onClick={()=>{setSignin(true)}}>Login</span></Link>
                   
                    <Link to="/masignup" id='content-link'><span className='nav-item' onClick={()=>{setSignup(true)}}>SignUp</span></Link>

                    <a ><span className='nav-item' onClick={()=>setLogin(true)}> NA/Login2</span></a>
                    {login && <Login login={login} setLogin={setLogin}/>}

                    <a><span className='nav-item' onClick={()=>setReg(true)}>NA/SignUp</span></a>
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
                        <Link to="/malogin">
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