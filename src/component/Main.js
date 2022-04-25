import React from 'react'
import grid from '../images/grid.png'

function Main() {
  return (
    <section className='hero'>
      <img src={grid} className='sec-img' />
      <h1 className='sec-header'>Online Experiences</h1>
      <p className='sec-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  )
}

export default Main