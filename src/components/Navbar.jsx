import React from 'react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-teal-800 text-white p-4">
      <h4 className="px-4 font-semibold text-2xl">
        Task Manager
      </h4>
      <div className="flex gap-2">
      <Button text="Login" link="/Login" />
      <Button text="Sign Up" link="/Signup" />
      </div>
    </div>
  )
}

export default Navbar