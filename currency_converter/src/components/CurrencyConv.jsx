import React from 'react'
import { useRef, useState } from 'react'


const CurrencyConv = () => {

  const [dollar, setDollar] = useState(0)
  const [convRupee, setRupee] = useState(0)


  const dollarRef = useRef()

  const handleConvert = ()=>{
    const dollar = dollarRef.current.value
    const rupee = dollar * 74.83
    setDollar(dollar)
    setRupee(rupee)
    
  }


  return (
    <>
      <h2>Currency Converter</h2>
      <label htmlFor="dollar"></label>
      <input ref={dollarRef} type="text" name="dollar" id='dollar' className="dollar" onChange={handleConvert}/>
      <button onClick={handleConvert} >Convert</button>

      <p>Converted RS:{convRupee} rs </p>
    
    </>
  )
}

export default CurrencyConv;