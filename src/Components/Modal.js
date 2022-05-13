import React from 'react'
import Dropdown from './Dropdown'
import Input from './Input'
import "./Modal.css"
import Radio from './Radio'

const Modal = ({ closeModal }) => {
    return (

        <div className='modalBackground'>  
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='title'>
                    <h1>Calculate the cost</h1>
                </div>
                <div className='body'>
                    <Dropdown />
                    <Input />
                </div>
                <div className='body-other'> 
                        <Radio />
                    </div>
                <div className='footer'>
                    <button>Calculate the cost</button>
                </div>
            </div>
        </div>
    )
}

export default Modal