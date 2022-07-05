import { notification } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Custom2 from '../components/Custom2.css'
import { auth } from '../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


function MaSignUp() {

    const navigate = useNavigate()
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            username: "", 
            gender: "",
            password: "",
            cpassword: "",
            updates: true
        })

        function handleChange(event) {
            const {name, value, type, checked} = event.target
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
                }
            })
        }

        function handleSubmit(event) {
            event.preventDefault()

            if(formData.updates){
                console.log(formData)
            }

            if(formData.password === formData.cpassword) {
                

                // localStorage.setItem("data", JSON.stringify(formData))
                const {email, password} = formData;
                createUserWithEmailAndPassword(auth, email, password)
                    .then((response) => {
                      navigate("/photolist")
                      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                    })
                    .catch(error=>console.error(error))                
                // {navigate("/malogin")}
               
            } else {
                console.log("Passwords do not match")
                notification.error({
                    message:"error",
                    description:"Passwords do not match",
                    duration:3,
                    placement:"top"

                })
            }
            
            if(formData.updates) {
                console.log("sign up for email updates and promo")
            }

        }
        
        // function handleSubmit(event) {
        //     event.preventDefault()
        //     // submitToApi(formData)
        //     console.log(formData)
        // }    

    return (
        <div className='form-wrapper'>
            <div className='form-container'>
                <form className='form-box' onSubmit={handleSubmit}>
                    <h2>Sign up</h2>

                    <input 
                        type="text" 
                        placeholder="First name" 
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                    />

                    <input 
                        type="text" 
                        placeholder="Last name"
                        onChange={handleChange}
                        name="lastName"
                        value={formData.lastName}
                    />

                    <input 
                        type="email" 
                        placeholder="Email" 
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />

                    <input 
                        type="text" 
                        placeholder="Username"
                        onChange={handleChange}
                        name="username"
                        value={formData.username} 
                    />
                    
                    <select 
                        name="gender"
                        id="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option>-- Select your Gender --</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    
                    <input 
                        name="password"
                        type="password" 
                        placeholder="Enter your Password" 
                        onChange={handleChange}
                        value={formData.password}
                    />

                    <input 
                        name="cpassword"
                        type="password" 
                        placeholder="Confirm your Password" 
                        onChange={handleChange}
                        value={formData.passwordConfirm}
                    />

                    <div className='agree-terms'>
                        <input
                            className='agree-class'
                            id="updates"
                            type="checkbox"
                            name="updates"
                            onChange={handleChange}
                            checked={formData.updates}
                        />
                        <label htmlFor="updates">I accept free email updates and promotions</label>
                    </div>

                    <div className='form-box-item'>
                        <button type="submit" className='btn1'>Sign up</button>
                        <button type="submit" className='btn2' onClick={()=>navigate("/")}>Cancel</button>
                    </div>

                    <div id='login-btn' onClick={()=>navigate("/malogin")}>
                        <p>Login</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MaSignUp