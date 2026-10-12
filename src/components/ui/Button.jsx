import { Link } from 'react-router-dom'

const Button = ({ text, link, type = 'button' }) => {
  const button = (
    <button type={type} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 my-2">
      {text}
    </button>
  )

  return (
    <div>
        {link ? <Link to={link}>{button}</Link> : button}
    </div>
  )
}

export default Button
