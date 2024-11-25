import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
// import './App.css'

function App() {

  const nameRef = useRef()
  
  const cnmid = useRef()
  const cnend = useRef()
  
  const wtmid = useRef()
  const wtend= useRef()
  
  const daamid = useRef()
  const daaend = useRef()

  const sdammid = useRef()
  const sdamend = useRef()

  const edimid = useRef()
  const ediend = useRef()


  const handleSubmit = async () => {
    const name = nameRef.current.value;
    
    const cnmidMarks = parseFloat(cnmid.current.value);
    const cnendMarks = parseFloat(cnend.current.value);

    const wtmidMarks = parseFloat(wtmid.current.value);
    const wtendMarks = parseFloat(wtend.current.value);

    const daamidMarks = parseFloat(daamid.current.value);
    const daaendMarks = parseFloat(daaend.current.value);

    const sdammidMarks = parseFloat(sdammid.current.value);
    const sdamendMarks = parseFloat(sdamend.current.value);

    const edimidMarks = parseFloat(edimid.current.value);
    const ediendMarks = parseFloat(ediend.current.value);

    const totalMarks = 
        cnmidMarks + cnendMarks +
        wtmidMarks + wtendMarks +
        daamidMarks + daaendMarks +
        sdammidMarks + sdamendMarks +
        edimidMarks + ediendMarks;

    const maxMarks = (30 + 70) * 5; 
    const percentage = (totalMarks / maxMarks) * 100;

    const marksData = {
      name, 
      cnmid:cnmidMarks,
      cnend:cnendMarks,
      wtmid:wtmidMarks,
      wtend:wtendMarks,
      daamid:daamidMarks,
      daaend:daaendMarks,
      sdammid:sdammidMarks,
      sdamend:sdamendMarks,
      edimid:edimidMarks,
      ediend:ediendMarks,
      total:totalMarks,
      percent:percentage.toFixed(2)
    }

    try {
      const response = await axios.post("http://localhost:3000/insertmarks", marksData);
      alert("Data submitted successfully!");
    } catch (error) {
      alert("Failed to submit marks. Please try again.");
    }
    
    alert(`Total Marks: ${totalMarks}\nPercentage: ${percentage.toFixed(2)}%`);
};


  return (
    <>
    <div className="main-container">
      <h2>Calculate Semester Result</h2>
      <label htmlFor="name">Enter Name: </label>
      <input ref={nameRef} type="text" id='name' />
      <div className="form">

        <div className="subject">
          <p>Computer Networks</p>
          <label htmlFor="name">Mid Sem(30): </label>
          <input ref={cnmid} type="text"/>
          <label htmlFor="name">End Sem(70): </label>
          <input ref={cnend} type="text"/>
        </div>

        <div className="subject">
          <p>Web Technologies</p>
          <label htmlFor="name">Mid Sem(30): </label>
          <input ref={wtmid} type="text"/>
          <label htmlFor="name">End Sem(70): </label>
          <input ref={wtend} type="text"/>
        </div>

        <div className="subject">
          <p>DAA</p>
          <label htmlFor="name">Mid Sem(30): </label>
          <input ref={daamid} type="text"/>
          <label htmlFor="name">End Sem(70): </label>
          <input ref={daaend} type="text"/>
        </div>

        <div className="subject">
          <p>SDAM</p>
          <label htmlFor="name">Mid Sem(30): </label>
          <input ref={sdammid} type="text"/>
          <label htmlFor="name">End Sem(70): </label>
          <input ref={sdamend} type="text"/>
        </div>

        <div className="subject">
          <p>EDI</p>
          <label htmlFor="name">Mid Sem(30): </label>
          <input ref={edimid} type="text"/>
          <label htmlFor="name">End Sem(70): </label>
          <input ref={ediend} type="text"/>
        </div>


      </div>
        <button onClick={handleSubmit}>Submit Marks</button>

    </div>
    
    </>
  )
}

export default App
