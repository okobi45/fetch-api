import React from 'react'
import '../components/Custom1.css'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'


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
            .then(auth=>{navigate("/photolist")})
            .catch(error=>console.error(error))

        }
    
    return (
        <div className='form-wrapper2'>
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