import React, { useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {

  const navigate = useNavigate();

    const nameRef= useRef();
    const passRef = useRef();

    const handleLogin = async ()=>{
        const name = nameRef.current.value;
        const pass = passRef.current.value;
        console.log(name, pass);

        const data = {
          uname: name,
          pass: pass
        }

        try{
          const res = await axios.post("http://localhost:3000/login", data);
          console.log(res.data);
          if(res.status){
            navigate('/cat')
            alert("Login Successfull");
          }
        }catch(err){
          console.log(err)
        }
    }

  return (

    <>
    
    <div className="main-container">

        <h2>Login</h2>

        <input ref={nameRef} type="text" name="uname" id="uname" />
        <input ref={passRef} type="text" name="pass" id="pass" />
        <button onClick={handleLogin}>Login</button>

    </div>

    </>
  )
}

export default Login