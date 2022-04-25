
import React from 'react'
import './App.css'
import Card from './component/Card'
import Nav from './component/Nav'
import Main from './component/Main'
import data from './data'


function App() {
    const cards = data.map(item => {
      return(
        
        <Card 
        key = {item.id}
        item = {item}
        />
        
       
      )
    })
  return (
    <>
    <Nav/>
    <Main/>
    <div className='int'>
    {cards}
    </div>
   
     

    </>
  );
}

export default App;
