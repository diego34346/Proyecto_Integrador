import React from "react";
import { useState } from "react";
import validate from "./validation";
import "./form.modules.css"


export default function Form({Login}) {

  const [userData, setUserData] = useState ({
    email: "diego@email.com",
    password: "654321"
  })

  const [errors, setErrors] = useState ({
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value
    setUserData({...userData, [property]:value})
    setErrors(validate({...userData, [property]:value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    Login(userData)
  }  

  return (
    <form onSubmit={handleSubmit}>      
      <div>
        <label htmlFor="email">Name:</label>
        <input 
          type="text" 
          name="email"
          value={userData.email}
          onChange={handleChange}
          className={errors.email && 'warning'}
          placeholder="Email.."
          />
          <p className='danger'>{errors.email}</p>
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input 
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          className={errors.email && 'warning'}
          placeholder="Password.."
          />
          <p className='danger'>{errors.password}</p>
      </div>

      <button type="submit" >Submit</button>
    </form>
  );
}
