import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, link}) => {
  return (
    <div>
        <Link to={link}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 my-2">{text}</button>
        </Link>
    </div>
  )
}

export default Button