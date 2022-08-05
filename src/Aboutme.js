import React from 'react'

export default function Aboutme() {
  return (
    <div className = "mt-16">
        <div className ="justify-center my-5 md:w-5/6">
            <h1 class = "text-3xl font-medium mx-8 md:mx-32 md:text-6xl md:font-light xl:mx-64 2xl:ml-96">Full Stack Developer and Finance Student</h1>
        </div>
            
        <div className ="justify-center my-5 md:flex md:justify-between my-5">
            <div className ="text-xl my-5 font-light mx-8 md:ml-32 md:w-1/3 md:text-3xl lg-text-3xl xl:ml-64 2xl:ml-96">
            <p>Full Stack developer with a passion for learning new and exciting things! Positive thinker interested in technology and financial trends.</p>
            <p className="mt-8">Advanced skills in HTML and CSS. Intermediate skills in Javascript front-end and back-end. Excelent in database management.</p>
            </div>
            <img id="starterImg" className = "h-96 m-auto md:mr-32 xl:mr-64 2xl:mr-96 rounded-lg" src={process.env.PUBLIC_URL+"favicons/starterPic.jpg"}></img>
        </div>

        <div className ="justify-center text-center mt-32 ">
            <h1 className = "text-3xl overline underline font-light mx-8 md:mx-32 xl:mx-64 2xl:ml-96">My Projects</h1>
        </div>

    </div>
  )
}
