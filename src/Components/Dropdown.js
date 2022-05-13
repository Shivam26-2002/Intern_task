import React from 'react'
import "./Dropdown.css"

const Dropdown = () => {
  return (
    <div>
      <div>
      <select className='dropdown-style'>
        <option value="PersonalWeb">Personal Websites</option>
        <option value="one">one</option>
        <option value="two">twp</option>
      </select>
    </div>
    </div>
  )
}

export default Dropdown