import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const studLogin = () => {

  const nameRef = useRef()
  const navigate = useNavigate();


  const handlelogin = () => {
    const name2 = nameRef.current.value
    alert(name2)

    Cookies.set('name',name2)
    navigate('/studenthome')
    alert("Login successful")
    
  }

  return (
    <>
        <div>studLogin</div>

        <div>
            <input ref={nameRef} type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button onClick={handlelogin}>Login</button>
        </div>
    
    </>
  )
}

export default studLogin