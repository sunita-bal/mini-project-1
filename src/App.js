import './App.css';
import React from 'react'
import data from './data'
import Nav from './component/Nav'
import Cards from './component/Cards'

function App() {
  const cards = data.map(item => {
    return (
      <Cards
      key = {item.id}
      item = {item}
      />
    )
  })
  return (
    <>
    <Nav/>
      {cards}
    </>
    
      
    
  )
}

export default App