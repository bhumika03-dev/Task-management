const Input = ({ label, name, type, placeholder, register }) => {
  const fieldName = name || label
  const registration = register ? register(fieldName) : {}

  return (
    <div>
        <label>
            {label}
            <input type={type} placeholder={placeholder} {...registration} className='px-4 py-2 rounded border border-gray-300  w-full' />
        </label>
    </div>
  )
}

export default Input
