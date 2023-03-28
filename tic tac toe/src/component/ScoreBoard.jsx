import React from 'react'
import "./Scoreboard.css"

function scoreBoard({xScore,oScore,tScore,boo}) {
  return (
    <div className='scoreboard'>
      <span className={`x-score ${boo==true?"xplay":""}`}>X-{xScore}</span>
      <span className={`o-score ${boo==false?"oplay":""}`}>O-{oScore}</span>
      <span className={"t-score"}>T-{tScore}</span>
    </div>
  )
}

export default scoreBoard
