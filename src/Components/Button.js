import React from 'react'
import { useState } from "react";
import Modal from './Modal';


export default function Button() {
    const [openModal, setOpenModal] = useState(false)
  return (
    <>
        <div className ="float-right mr-8 lg:invisible ">
            <button id = "square" onClick ={() => {
                setOpenModal(true)
                }} 
                className ="" href="">
                <div id = "burgerwrap" className="">
                    <span></span>
                
                    <span></span>
                </div>
            </button>
        </div> 

        {openModal && <Modal closeModal ={setOpenModal} />}
    </>
  )
}
