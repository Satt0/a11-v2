import React, { useState, useEffect } from "react";
import SidePanel from "./Contents/SidePanel/SidePanel";
import Show from "./Contents/Show/Show";
import {useSelector,useDispatch} from 'react-redux'
import TopPanel from "./Contents/TopPanel/TopPanel";
export default function Galery() {
    const display = [
    { view: "teacher", length: 1 },
    { view: "girl", length: 4 },
    { view: "boy", length: 4 },

    { view: "moment", length: 1 },
  ];
const index = useSelector(state => state.index)
const dispatch = useDispatch()

  const [a, seta] = useState(0);
  const onClick = (num) => {
    return  () => {
       if(!index){
        seta(num);
       }
       else{
         dispatch({type:'toggleIndex'})
         seta(num)
       }
    };
  };
  useEffect(() => {
    let time=0;
    switch(a){
      case 0:time=15000;break;
      case 2:time=15000;break;
      default: time=60000;break
    }
    const t = setTimeout(() => {
     if(!index){
      seta((a) => (a + 1) % 4);
     }
    }, time);
    return () => {
      clearTimeout(t);
    };
  },[a,index]);

 
  return (
    <div id="galery" className="Galery" onClick={()=>{   
      
  }}>
      <SidePanel onClick={onClick} index={a} />
      <Show  length={display[a].length} view={display[a].view} />
      <TopPanel onClick={onClick} index={a} />
    </div>
  );
}
