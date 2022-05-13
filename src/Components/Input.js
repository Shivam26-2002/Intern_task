import React from 'react'
import "./Input.css"
const Input = () => {
  return (
    <div>
        <div className='input-body'>
        <span className='label-style'>Number of Pages</span>
        <input type="text"  className='input-style'/>
        </div>
    </div>
  )
}

export default Input