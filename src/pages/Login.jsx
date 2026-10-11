import React from 'react'
import { Link } from 'react-router-dom'

import Input from '../components/ui/input'
import Button from '../components/ui/Button'
const Login = () => {
  return (
    <div className="max-w-lg mx-auto h-screen flex flex-col justify-center gap-2">
      <h1 className="text-xl  font-bold ">Login to your account</h1>
      <p>To add a new task, please login to your account.</p>
       <form>
        <Input label="Email" type="email" placeholder="Enter your email"/>
        <Input label="Password" type="password" placeholder="Enter your password"/>
        <Button text="Login"/>
       </form>
       <Link to="/" className=" text-blue-600">Go to Home</Link>
    </div>
  )
}

export default Login