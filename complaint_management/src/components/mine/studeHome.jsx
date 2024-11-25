import React, { useRef } from 'react'
import Cookies from 'js-cookie'; // Import js-cookie for handling cookies
import axios from 'axios';

const studeHome = () => {
  
  const compaintRef = useRef()

  const handleSubmit = async()=>{

    const name = Cookies.get('name')
    const complaint = compaintRef.current.value;

    alert(complaint)

    const response = await axios.post('http://localhost:3000/api/complaints/add',{
      student_name:name, 
      complaint
    })
    console.log("form submitted")
  }

  return (
    <>

    <div className="main-container">

      <h1>Complaint Box</h1>

      <textarea ref={compaintRef} name="complaint" id="complaint"></textarea>
      <button onClick={handleSubmit}>Submit</button>

    </div>
    
    </>
  )
}

export default studeHome