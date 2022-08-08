import React from 'react'
import "./Modal.css"
import Goback from './Images/Goback'
import Github from './Images/Github'
import Linkedin from './Images/Linkedin'
import Instagram from './Images/Instagram'


export default function Modal({ closeModal } ) {

  return (
    <div id="mymodal" className="h-screen bg-white grid content-center ">
        <button className="fixed top-28 right-10" id="goback" onClick ={()=> closeModal(false)}>
            <Goback />
        </button>
            
           
        <div className = "grid justify-items-center m-5">
            <span className = "text-xl"><a href="mailto:pgarciag566@gmail.com">Contáctame</a></span>
            <span className = "text-xl"><a href="https://drive.google.com/file/d/1CXXbnb9I8H2h2DM6dfzdsSiLOUfg7lL0/view?usp=sharing" target="_blank"> Resumé</a></span>
        </div> 
            

        <div className = "list-none  flex justify-center">

            <li className ="mx-4"><a href="https://github.com/Pablogarciag02" target="_blank">
                <Github />
            </a>
            </li>

            <li className ="mx-4"><a href="https://www.linkedin.com/in/pablo-garc%C3%ADa-08842621b/" target="_blank">
                <Linkedin />
            </a>
            </li>

            <li className ="mx-4"><a href="https://www.instagram.com/pablogarciag02/" target="_blank"> 
                <Instagram />
            </a>
            </li>

        </div>  
      
    </div>
  )
}
