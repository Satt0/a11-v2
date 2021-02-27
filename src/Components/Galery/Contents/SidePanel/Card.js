import React from 'react'


export default function Card({name,bg,zoom}) {



  return (
    <div
      className={zoom?"Card zoom":"Card"}
     
      style={{ backgroundImage:`url(${bg})`}}
    > 
    <p>{name}</p></div>
  )
}
