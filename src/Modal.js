import React from 'react'
import "./Modal.css"


export default function Modal() {
  return (
    <div id="mymodal" class="h-screen bg-white grid content-center ">
        <button class="fixed top-28 right-10" id="goback">
            <img src={process.env.PUBLIC_URL+"favicons/goback.png"} width="25px" height="25px"></img>
        </button>
            
           
        <div class = "grid justify-items-center m-5">
            <span class = "text-xl"><a href="mailto:pgarciag566@gmail.com">Contáctame</a></span>
            <span class = "text-xl"><a href="https://drive.google.com/file/d/1CXXbnb9I8H2h2DM6dfzdsSiLOUfg7lL0/view?usp=sharing" target="_blank"> Resumé</a></span>
        </div> 
            

        <div class = "list-none  flex justify-center">

            <li class ="mx-4"><a href="https://github.com/Pablogarciag02" target="_blank"><img src={process.env.PUBLIC_URL+"favicons/github.png"}
                width="20px"
                height="20px"></img></a>
            </li>
            <li class ="mx-4"><a href="https://www.linkedin.com/in/pablo-garc%C3%ADa-08842621b/" target="_blank"><img src={process.env.PUBLIC_URL+"favicons/linkedin.png"}
                width="20px"
                height="20px"></img></a>
            </li>
            <li class ="mx-4"> <a href="https://www.instagram.com/pablogarciag02/" target="_blank"> <img src={process.env.PUBLIC_URL+"favicons/instagram.png"}
                width="20px"
                height="20px"></img></a>
            </li>

        </div>  
    </div>
  )
}
