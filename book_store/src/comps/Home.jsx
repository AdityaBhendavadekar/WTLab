import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {

    const navigate = useNavigate();


    const loginPage = () => {
        alert("open login")
        navigate("/login")
    }

    const registerPage = () => {
        alert("open register")
        navigate("/register")
    }

    return (
        <>
            <div className="main-container">

                <h2>Home Page</h2>

                <button onClick={loginPage}>Login</button>
                <button onClick={registerPage}>Register</button>
            </div>

        </>
    );
}
export default Home