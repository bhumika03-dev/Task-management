import Button from './ui/Button'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
const Navbar = () => {
  const {user,setUser}= useContext(AuthContext)
  return (
    <div className="flex items-center justify-between bg-teal-800 text-white p-4">
      <h4 className="px-4 font-semibold text-2xl">
        Task Manager
      </h4>
      {
        user && (
              <nav className="flex gap-2 text-center text-amber-300 ">
                
                <Link to="/AllTasks" className="text-2xl ">All Tasks</Link>
                <Link to="/AddTasks" className="text-2xl ">Add Tasks</Link>
                
                <Button text="Logout" onClick={()=>setUser(null)} />
              </nav>
        )
      }
      {!user &&(
      <div className="flex gap-2">
      <Button text="Login" link="/login" />
      <Button text="Sign Up" link="/signup" />
      </div>
      )}
    </div>
  )
}

export default Navbar
