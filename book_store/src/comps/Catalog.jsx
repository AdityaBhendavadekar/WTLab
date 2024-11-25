import React from 'react'
import Card from './card'
import './Catalog.css'

const Catalog = () => {
  return (
    <>
      <h2>Catalog</h2>
      <div className="main-container">
        <Card name={"book 1"}></Card>
        <Card name={"book 2"}></Card>
        <Card name={"book 3"}></Card>
        <Card name={"book 4"}></Card>
        <Card name={"book 5"}></Card>
      </div>    
    </>
  )
}

export default Catalog