import { useState } from 'react'
import './App.css'
import Board from './component/Board'
import ScoreBoard from './component/ScoreBoard'

function App() {
 const [board,setBoard] = useState(Array(9).fill(null))
 const [boo,setBoo] = useState(true)
 const [xScore,setXscore] = useState(0)
 const [oScore,setOscore] = useState(0)
 const [tScore,setTscore] = useState(0)
 const [gameOver,setGameOver] = useState(false)

 const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

 
 const handleBoxClick = (boxId) =>{
  
  const updatedBoard = board.map((value,id)=>{
  if(id===boxId && boo === true){
      setBoo(false)
      return "X"
  }else if(id===boxId && boo === false){
     setBoo(true)
    return "O"
  }
  else{
    return value
  }
  })
  
  
  setBoard(updatedBoard);
  const winner = checkWinner(updatedBoard)
if(winner){
  if(winner === "X"){
    setXscore(xScore+1)
  }else{
    setOscore(oScore+1)
  }
  setGameOver(true)
}else if(!updatedBoard.includes(null)){
  setTscore(tScore+1)
}
  
 }

 const checkWinner = (updatedBoard) => {
  for(let i = 0 ; i<WIN_CONDITIONS.length;i++){
    const[x,y,z] = WIN_CONDITIONS[i]
    if(
      updatedBoard[x]&&
      updatedBoard[x] === updatedBoard[y] &&
      updatedBoard[y] === updatedBoard[z]
    ){
      console.log(`winner ${updatedBoard[x]}`)
      return updatedBoard[x]
    }
  }
 }

 const restartGame = () =>{
  reset()
  setXscore(0)
  setOscore(0)
  setTscore(0)
 }

 const reset = () =>{
  setGameOver(false)
  setBoard(Array(9).fill(null))
 }


  return (
    <div className="App">
      <ScoreBoard xScore={xScore} oScore={oScore} tScore={tScore} boo={boo}/>
      <Board board={board} onClick={gameOver===true?reset : handleBoxClick} />
      <button className="btn" onClick={restartGame}>Restart Game</button>
      <button className="btn" onClick={reset}>Next Round</button>
      </div>

  )
}


export default App
