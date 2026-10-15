import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Tasks from './pages/Tasks'
import AllTasks from './pages/AllTasks'
import AddTasks from './pages/AddTasks'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Tasks" element={<Tasks />} />
      <Route path="/AllTasks" element={<AllTasks />} />
      <Route path="/AddTasks" element={<AddTasks />} />
    </Routes>
    </>
  )
}

export default App
