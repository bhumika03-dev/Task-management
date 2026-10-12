import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  function handleData(data) {
    console.log(data)
    navigate('/Tasks')
  }

  return (
    <div className="max-w-lg mx-auto h-screen flex flex-col justify-center gap-2">
      <h1 className="text-xl  font-bold ">SignUp to your account</h1>
      <p>To add a new task, please SignUp to your account.</p>
       <form onSubmit={handleSubmit(handleData)}>
        <Input label="Email" name="email" type="email" placeholder="Enter your email" register={register} />
        <Input label="Password" name="password" type="password" placeholder="Enter your password" register={register} />
        <Input label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm your password" register={register} />
        <Button text="Sign Up" type="submit" />
       </form>
       <Link to="/login" className=" text-blue-600">Already have an account? Login</Link>
    </div>
  )
}

export default Signup
