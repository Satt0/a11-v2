import React, { useState, useEffect } from "react";
//import SidePanel from "./Contents/SidePanel/SidePanel";
import Show from "./Contents/Show/Show";
//import {useSelector,useDispatch} from 'react-redux'
//import {useScroll} from 'lib/hook'
//import TopPanel from "./Contents/TopPanel/TopPanel";
export default function Galery() {
    const display = [
    { view: "teacher", length: 1 },
    { view: "girl", length: 4 },
    { view: "boy", length: 4 },

    { view: "moment", length: 1 },
  ];


  // const [a, seta] = useState(0);
  // const onClick = (num) => {
  //   return  () => {
  //      if(!index){
  //       seta(num);
  //      }
  //      else{
  //        dispatch({type:'toggleIndex'})
  //        seta(num)
  //      }
  //   };
  // };
  // useEffect(() => {
  //   const data=image.filter(e=>e.view===display[a].view)
  //   const timeout=(Math.ceil(data.length / display[a].length) * 6500);
  //   let t
  //   if(atView){
      
  //      t = setTimeout(() => {
  //       if(!index){
  //        seta((a) => (a + 1) % 4);
  //       }
  //      }, timeout);
  //   }
    
  //   return () => {
  //     clearTimeout(t);
  //   };
  // },[a,index,image,atView]);

 
  return (
    <>
  <h1 className="title-header">#Gallery</h1>
    <div
    id="galery"
     className="Galery" onClick={()=>{   
      
    }}>
        
        {/* <SidePanel onClick={onClick} index={a} /> */}
        <Show  length={display[1].length} view={display[1].view} />
        {/* <Show  length={display[2].length} view={display[2].view} /> */}
        {/* <Show  length={display[0].length} view={display[0].view} /> */}
        
        <Show title="Moments" length={display[3].length} view={display[3].view} />
        {/* <TopPanel onClick={onClick} index={a} /> */}
      </div>
    
    </>
  );
}
