import React from 'react'
import '../components/Custom1.css'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'


const newData = localStorage.getItem("data")
const data = JSON.parse(newData)
console.log(newData);
console.log(data);
function MaLogin() {

    const navigate = useNavigate()

 

    const [formData, setFormData] = React.useState(
        { 
            username: "", 
            password: "",
        })

        function handleChange(event) {
            const {name, value} = event.target
            setFormData({...formData, [name]: value}) 
        }

console.log(formData);

        function handleEnter(event) {
            event.preventDefault()

            if(formData.username !== data.username && formData.password !== data.password) {
              console.log("Wrong login details");
            } else {
                navigate("/photolist")
            }
        }
    
    return (
        <div className='form-wrapper2'>
            <form className='form-box2' onSubmit={handleEnter}>
                <h2>Login</h2>

                <input 
                    placeholder='username'
                    type="text" 
                    onChange={handleChange}
                    name="username"
                    value={formData.username} 
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