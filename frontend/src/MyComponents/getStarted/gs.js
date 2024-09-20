import React from 'react'
import image from "./logo.png"

const Gs = () => {
  return (
    <div>
        <img src={image}/>
        <div className='info'>
            <p>About</p>
        </div>
        <button onClick="./">Get Started</button>
    </div>
  )
}

export default Gs
