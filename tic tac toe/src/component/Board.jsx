import React from 'react'
import "./Board.css";
import Box from "./Box.jsx"

function Board({ board, onClick,id }) {
    return (
        <div class="board">
            {board.map((item,id) => (<Box  id = {id} item={item} onClick={() => item===null && onClick(id)} />))}
        </div>
    )
}

export default Board

