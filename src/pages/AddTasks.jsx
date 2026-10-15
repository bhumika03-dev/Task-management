import React from 'react'
import Navbar from '../components/Navbar'
import {useForm} from 'react-hook-form'
import Input from '../components/ui/Input'

import Button from '../components/ui/Button'
const AddTasks = () => {

const { register, handleSubmit } = useForm()
function handleData(data){
  console.log(data)

}
  return (
    <div>
      <Navbar/>
     
        <div className="max-w-lg mx-auto h-screen flex flex-col justify-center gap-2">
          <h1 className="text-xl  font-bold ">Add Your Task</h1>
          <p>Fill in the details below to add a new task.</p>
          <form onSubmit={handleSubmit(handleData)}>
            <Input label="Task Name" name="taskName" type="text" placeholder="Enter task name" register={register} />
            <Input label="Description" name="description" type="text" placeholder="Enter task description" register={register} />
        <select {...register("status")}>
            <option>Task Status</option>
            <option value="pending">Pending</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
        </select>
        <select  {...register("priority")}>
            <option>Task Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <Button text="Add Task" type="submit" link="/AllTasks" />
       </form>
       
    </div>

    </div>
  )
}

export default AddTasks
