import React from "react";
import {useSelector} from 'react-redux'
import style from './Ending1.module.scss'
export default function Ending1() {
  const date=useSelector(state=>state.date)
  return (
    <>
     
        <div
          className={`${style.Ending} end1`}
         
        >
          <h2 className="h4">-The End-</h2>
        
          <h5>last updated: {date}</h5>
          <h6>contact: <a target="_blank" rel="noopener" href="https://www.facebook.com/hoangminhtan6601/">facebook</a></h6>
        </div>
    
    </>
  );
}
