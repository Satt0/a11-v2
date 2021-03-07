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
const image=useSelector(state=>state.img)
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
    const data=image.filter(e=>e.view===display[a].view)
    const timeout=(Math.ceil(data.length / display[a].length) * 6500);
    const t = setTimeout(() => {
     if(!index){
      seta((a) => (a + 1) % 4);
     }
    }, timeout);
    return () => {
      clearTimeout(t);
    };
  },[a,index,image]);

 
  return (
    <>
    <h2 data-aos="fade-in"  id="galery" className="label-text p-3" style={{color:'white'}}>-Galery-</h2>
    <div data-aos="fade-in" className="Galery" onClick={()=>{   
      
    }}>
  
        <SidePanel onClick={onClick} index={a} />
        <Show  length={display[a].length} view={display[a].view} />
        <TopPanel onClick={onClick} index={a} />
      </div>
    
    </>
  );
}
