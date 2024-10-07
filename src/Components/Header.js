import React from 'react'
import "./Header.css"
import Linkedin from './Images/Linkedin'
import Instagram from './Images/Instagram'
import Github from './Images/Github'

export default function Header() {
  return (
    <div>
      <div className="flex justify-end invisible mr-24 mt-14 lg:visible">
        <span className = "mr-8 hover:underline"><a href="mailto:pgarciag566@gmail.com">Contáctame</a></span>
        <span className = "mr-8 hover:underline"><a href="https://drive.google.com/file/d/13IXTFX5UfO4RmfzzAnW2ysQoRMDSX937/view?usp=sharing" target="_blank">Resumé</a></span>

        <li className ="inline mx-4 list-none"><a href="https://github.com/Pablogarciag02" target="_blank">
          <Github />
        </a>
        </li>

        <li className ="inline mx-4 list-none "><a href="https://www.linkedin.com/in/pablo-garc%C3%ADa-08842621b/" target="_blank">
          <Linkedin />
        </a>
        </li>

        <li className ="inline mx-4 list-none"> <a href="https://www.instagram.com/pablogarciag02/" target="_blank"> 
          <Instagram />
        </a>
        </li>
      </div>
    </div>
  )
}
