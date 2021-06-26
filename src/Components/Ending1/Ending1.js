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
          <h2 className="h4">-To be continued-</h2>
        
          <h5>last updated: {date}</h5>
        </div>
    
    </>
  );
}
