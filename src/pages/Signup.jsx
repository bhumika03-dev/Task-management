import { Link } from 'react-router-dom'

import Input from '../components/ui/input'
import Button from '../components/ui/Button'
const Login = () => {
  return (
    <div className="max-w-lg mx-auto h-screen flex flex-col justify-center gap-2">
      <h1 className="text-xl  font-bold ">SignUp to your account</h1>
      <p>To add a new task, please SignUp to your account.</p>
       <form>
        <Input label="Email" type="email" placeholder="Enter your email"/>
        <Input label="Password" type="password" placeholder="Enter your password"/>
        <Input label="Confirm Password" type="password" placeholder="Confirm your password"/>
        <Button text="Sign Up"/>
       </form>
       <Link to="/login" className=" text-blue-600">Already have an account? Login</Link>
    </div>
  )
}

export default Login