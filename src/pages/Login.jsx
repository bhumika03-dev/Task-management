import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {

  const navigate = useNavigate()

const { register, handleSubmit } = useForm()
const {user,setUser}= useContext(AuthContext)


function handleData(data){
  console.log(data)
  setUser(data)
  navigate('/')
}





  return (
    <div className="max-w-lg mx-auto h-screen flex flex-col justify-center gap-2">
      <h1 className="text-xl  font-bold ">Login to your account</h1>
      <p>To add a new task, please login to your account.</p>
       <form onSubmit={handleSubmit(handleData)}>
        <Input label="Email" name="email" type="email" placeholder="Enter your email" register={register} />
        <Input label="Password" name="password" type="password" placeholder="Enter your password" register={register} />
        <Button text="Login" type="submit" />
       </form>
       <Link to="/" className=" text-blue-600">Go to Home</Link>
    </div>
  )
}

export default Login
