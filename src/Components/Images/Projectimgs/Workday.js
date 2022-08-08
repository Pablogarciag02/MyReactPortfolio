import React from 'react'
import Workdayimage from "./workDay.jpg"

export default function Workday() {
  return (
    <img className ="w-64 m-auto rounded-lg hover:w-96 hover:ease-in duration-300" src={Workdayimage}></img>
  )
}