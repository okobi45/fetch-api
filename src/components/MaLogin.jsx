import React from 'react'
import '../components/Custom1.css'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




// const newData = localStorage.getItem("data")
// const data = JSON.parse(newData)
// console.log(newData);
// console.log(data);

function MaLogin() {

    const navigate = useNavigate()

 

    const [formData, setFormData] = React.useState(
        { 
            email: "", 
            password: "",
        })

        function handleChange(event) {
            const {name, value} = event.target
            setFormData({...formData, [name]: value}) 
        }

console.log(formData);

        function handleEnter(event) {
            event.preventDefault()

            const {email, password} = formData;
            console.log(email)
            console.log(password)
            signInWithEmailAndPassword(auth, email, password)
             .then((response)=>{
                navigate("/photolist")
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                })
             .catch((error) => {
                if(error.code === 'auth/wrong-password'){
                    toast.error('please check the password');
                }if(error.code === 'auth/user-not-found'){
                    toast.error('please check the Email');
                }
             })

        }
    
    return (
        <div className='form-wrapper2'>
            <ToastContainer />
            <form className='form-box2' onSubmit={handleEnter}>
                <h2>Login</h2>

                <input 
                    placeholder='email'
                    type="text" 
                    onChange={handleChange}
                    name="email"
                    value={formData.email} 
                />

                <input 
                    placeholder='password'
                    name="password"
                    type="password" 
                    onChange={handleChange}
                    value={formData.password}
                />

                <button type='submit'>Login</button>
                <div id='signup-btn' onClick={()=>navigate("/masignup")}>
                    <p>Sign Up</p>
                </div>
            </form>
        </div>
    )
}

export default MaLogin