import React from 'react'

export default function Aboutme() {
  return (
    <div>
        <div class ="justify-center">
            <h1 class = "text-3xl mx-8 md:mx-32 xl:mx-64 2xl:ml-96">Fullstack Web Developer and Finance Student</h1>
        </div>
            
        <div class ="justify-center md:flex">
            <p class ="text-lg mx-8 md:ml-32  xl:ml-64 2xl:ml-96">Fullstack Web developer with a passion for learning new and exciting things! Positive thinker interested in technology and finance trends. Intermediate skills in HTML and CSS. Begginner skills in Javascript front-end and back-end </p>
            <img id="starterImg" class = "m-auto  h-96 md:mr-32 xl:mx-64 2xl:mr-96 rounded-lg" src={process.env.PUBLIC_URL+"favicons/starterPic.jpg"}></img>
        </div>

    </div>
  )
}
