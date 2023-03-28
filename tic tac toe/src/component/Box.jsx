import React from 'react'
import "./Box.css"
function Box({item,id,onClick}) {
  return (
    <button key={id} className={`box ${item==="X"?"x":"o"}`} onClick={onClick}>{item}</button>
  )
}

export default Box
