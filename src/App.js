import React, { useState } from 'react'
import "./App.css"
import Modal from './Components/Modal'

const App = () => {
    const [openModal, setopenModal] = useState(false)
    return (
        <div className='App'>
            <h1> Click Here </h1>
            <button className='openModalBtn' onClick={() => {
                setopenModal(true);
            }
            }>Open</button>


            {openModal && <Modal closeModal={setopenModal}/>}
        </div>
    )
}

export default App