import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Login = () => {
    const [formData, setFormData] = useState({ 
        email: "", 
        password: ""
    })
    const handleChange = (e)=>{
       setFormData({
        ...formData, [e.target.name]: e.target.value
       })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault(); 
        console.log("FormData: ", formData);
        
        try {
            const res = await axios.post("http://localhost:5000/user/login", formData ); 
            console.log(res);
        } catch (error) {
            console.log(error.response.data);
        }
       
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder='Enter your Email' />
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder='Enter your passowrd' />
            <button type='submit'> Submit</button>
        </form>
    </div>
  )
}
