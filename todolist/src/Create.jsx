import React, { useState } from 'react'
import axios from 'axios'

function Create() {
    const [task,setTask]=useState('');
    const handleAdd= ()=>{
        if (!task.trim()) {
            alert("Please enter a task.");
            return;
        }
        axios.post('http://localhost:3001/add',{task:task})
        .then(result=>{
            location.reload()
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='create_form'>
        <input type="text" name="" id="" placeholder='Enter a task' onChange={(e)=>setTask(e.target.value)}/>
        <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create