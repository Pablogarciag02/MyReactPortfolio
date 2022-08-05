import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div>
      <div className="flex justify-end mt-14 mr-24  invisible lg:visible">
        <span className = "mr-8 hover:underline"><a href="mailto:pgarciag566@gmail.com">Contáctame</a></span>
        <span className = "mr-8 hover:underline"><a href="https://drive.google.com/file/d/1CXXbnb9I8H2h2DM6dfzdsSiLOUfg7lL0/view?usp=sharing" target="_blank">Resumé</a></span>

        <li className ="inline list-none mx-4"><a href="https://github.com/Pablogarciag02" target="_blank"><img src={process.env.PUBLIC_URL+"favicons/github.png"}
          width="20px"
          height="20px"></img></a>
        </li>
        <li className ="inline list-none mx-4 "><a href="https://www.linkedin.com/in/pablo-garc%C3%ADa-08842621b/" target="_blank"><img src={process.env.PUBLIC_URL+"favicons/linkedin.png"}
          width="20px"
          height="20px"></img></a>
        </li>
        <li className ="inline list-none mx-4"> <a href="https://www.instagram.com/pablogarciag02/" target="_blank"> <img src={process.env.PUBLIC_URL+"favicons/instagram.png"}
          width="20px"
          height="20px"></img></a>
        </li>
      </div>


      <div className ="float-right mr-8 lg:invisible ">
          <button id = "square" className ="" href="">
              <div id = "burgerwrap" className="">
                <span></span>
            
                <span></span>
              </div>
          </button>
      </div> 
    </div>
  )
}
