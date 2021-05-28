import React from 'react'
import {useColor} from 'lib/hook'
import styles from './Card.module.scss'
export default function Card({name,bg,zoom}) {
const color=useColor()


  return (
    <div
      className={`${styles.Card} ${zoom?styles.zoom:''}`}
     
      style={{ backgroundImage:`url(${bg})`}}
    > 
    <p style={{backgroundImage:zoom?`linear-gradient(
      to right,
      ${color}, 0.7),
      transparent
    )`:`linear-gradient(
      to right,
      rgba(100, 100, 91, 0.7),
      transparent
    )`}}>{name}</p></div>
  )
}
