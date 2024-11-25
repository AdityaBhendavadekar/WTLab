import axios from 'axios';
import React, { useRef } from 'react'

const card = (props) => {

    // const bookRef = useRef();

    const handleClick = async ()=>{
        alert(props.name)

        const data = {
            uname: "aditya",
            bookname:props.name,
        }
        try{
            const response = await axios.post("http://localhost:3000/order", data );
            if(response){
                alert("Order Placed Successfully")
            }else{
                alert("Failed to place order")
            }
        }catch(err){
            console.log(err)
        }
    }
  return (
    <>
    <div className='card'>
        <p>{props.name}</p>
        <button onClick={handleClick}>Order Now</button>
    </div>
    </>
  )
}

export default card