import React from 'react'

const Input = ({ label, type, placeholder }) => {
  return (
    <div>
        <label>
            {label}
            <input type={type} placeholder={placeholder} className='px-4 py-2 rounded border border-gray-300  w-full'/>
        </label>
    </div>
  )
}

export default Input