import React from 'react'

export default function Projects() {
  return (
    <div class =" justify-center xl:inline-grid grid-cols-2 mt-10 flex-row">

        <div class = "justify-center p-4 mx-8 rounded-lg hover:ring-4 hover:ring-gray-900">
            <h2 class ="text-xl text-center my-8 font-semibold">Crypto Asset Manager</h2>
            <img class ="w-64 m-auto rounded-lg" src={process.env.PUBLIC_URL+"favicons/cryptoAssetmgr.jpg"}></img>
            <p class ="text-center my-2 text-lg">Real time crypto prices. </p>
            <div class = "w-full flex flex-col">
                <a class= "bg-black text-white rounded-lg py-2 my-4 text-center" href="https://github.com/richardguarnieri/personal-asset-manager" target="_blank"><button>Github</button></a>
                <a class="border border-black text-black rounded-lg py-2 text-center" href="https://richardguarnieri.github.io/personal-asset-manager/" target="_blank"><button>Page</button></a>
            </div>
        </div>

        <div class = "justify-center p-4 mx-8 rounded-lg hover:ring-4 hover:ring-gray-900">
            <h2 class ="text-xl text-center my-8 font-semibold">Pin-it</h2>
            <img class ="w-64 m-auto rounded-lg" src={process.env.PUBLIC_URL+"favicons/pinit.png"}></img>
            <p class ="text-center my-2 text-lg">Organize all the applications you use every day, having everything within your main internet access. </p>
            <div class = "w-full flex flex-col">
                <a class= "bg-black text-white rounded-lg py-2 my-4 text-center" href="https://github.com/AlejandroBahSan/Pin-it" target="_blank"><button>Github</button></a>
                <a class="border border-black text-black rounded-lg py-2 text-center" href="https://pin-it-app-project.herokuapp.com/" target="_blank"><button>Page</button></a>
            </div>
        </div>

        <div class = "justify-center p-4 mx-8 rounded-lg hover:ring-4 hover:ring-gray-900">
            <h2 class ="text-xl text-center my-8 font-semibold">Tech and Finance blog</h2>
            <img class ="w-64 m-auto rounded-lg" src={process.env.PUBLIC_URL+"favicons/techblog.png"}></img>
            <p class ="text-center my-2 text-lg">Post and talk about exciting things in this Tech and Finance Blog</p>
            <div class = "w-full flex flex-col">
                <a class= "bg-black text-white rounded-lg py-2 my-4 text-center" href="https://github.com/Pablogarciag02/Tech-Blog" target="_blank"><button>Github</button></a>
                <a class="border border-black text-black rounded-lg py-2 text-center" href="https://tech-blog-adineradomx.herokuapp.com/" target="_blank"><button>Page</button></a>
            </div>
        </div>

        <div class = "justify-center p-4 mx-8 rounded-lg hover:ring-4 hover:ring-gray-900">
            <h2 class ="text-xl text-center my-8 font-semibold">EmployeeTracker-SQL</h2>
            <img class ="w-64 m-auto rounded-lg" src={process.env.PUBLIC_URL+"favicons/employeeTracker.jpeg"}></img>
            <p class ="text-center my-2 text-lg">Manage and direct all employees through a database prompt.</p>
            <div class = "w-full flex flex-col">
                <a class= "bg-black text-white rounded-lg py-2 my-4 text-center" href="https://github.com/Pablogarciag02/EmployeeTracker-SQL" target="_blank"><button>Github</button></a>
            </div>
        </div>

        <div class = "justify-center p-4 mx-8 rounded-lg hover:ring-4 hover:ring-gray-900">
            <h2 class ="text-xl text-center my-8 font-semibold">Weather Dashboard</h2>
            <img class ="w-64 m-auto rounded-lg" src={process.env.PUBLIC_URL+"favicons/weatherDashboard.jpg"}></img>
            <p class ="text-center my-2 text-lg">Real time current weather and 5 day forecast.</p>
            <div class = "w-full flex flex-col">
                <a class= "bg-black text-white rounded-lg py-2 my-4 text-center" href="https://github.com/Pablogarciag02/Real-Time-Weather-Info-SearchBar-" target="_blank"><button>Github</button></a>
                <a class="border border-black text-black rounded-lg py-2 text-center" href="https://pablogarciag02.github.io/Real-Time-Weather-Info-SearchBar-/" target="_blank"><button>Page</button></a>
            </div>
        </div>

        <div class = "justify-center p-4 mx-8 rounded-lg hover:ring-4 hover:ring-gray-900">
            <h2 class ="text-xl text-center my-8 font-semibold">Code Quiz</h2>
            <img class ="w-64 m-auto rounded-lg" src={process.env.PUBLIC_URL+"favicons/codingQuiz.jpg"}></img>
            <p class ="text-center my-2 text-lg">Coding Quiz to test your skills!</p>
            <div class = "w-full flex flex-col">
                <a class= "bg-black text-white rounded-lg py-2 my-4 text-center" href="https://github.com/Pablogarciag02/HomeworkWeek4" target="_blank"><button>Github</button></a>
                <a class="border border-black text-black rounded-lg py-2 text-center" href="https://pablogarciag02.github.io/HomeworkWeek4/" target="_blank"><button>Page</button></a>
            </div>
        </div>

        <div class = "justify-center p-4 mx-8 rounded-lg hover:ring-4 hover:ring-gray-900">
            <h2 class ="text-xl text-center my-8 font-semibold">Work Day Scheduler</h2>
            <img class ="w-64 m-auto rounded-lg" src={process.env.PUBLIC_URL+"favicons/workDay.jpg"}></img>
            <p class ="text-center my-2 text-lg">Very usefull for managing ones time!</p>
            <div class = "w-full flex flex-col">
                <a class= "bg-black text-white rounded-lg py-2 my-4 text-center" href="https://github.com/Pablogarciag02/HomeworkWeek5" target="_blank"><button>Github</button></a>
                <a class="border border-black text-black rounded-lg py-2 text-center" href="https://pablogarciag02.github.io/HomeworkWeek5/" target="_blank"><button>Page</button></a>
            </div>
        </div>

    </div>
  )
}
