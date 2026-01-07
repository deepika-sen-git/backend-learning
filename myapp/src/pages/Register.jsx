import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Register = () => {
    const [formData, setFormData] = useState({
        name: "", 
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
        try {
            const res = await axios.post("http://localhost:5000/user/register", formData ); 
            console.log(res);
        } catch (error) {
            console.log(error.response.data);
        }
       
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder='Enter your Name' />
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder='Enter your Email' />
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder='Enter your passowrd' />
            <button type='submit'> Submit</button>
        </form>
    </div>
  )
}
