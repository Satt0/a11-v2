import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import style from './style.module.scss'
import Moment from "./index";
export default function Wrapper() {
    const [atView,setView]=React.useState(false)
    const ref=React.useRef(null)
  const moment = useSelector((state) => {
    const thisMoment = [...state.img.filter((e) => e.view === "moment")].map(
      (e) => ({ url: e.img[0].url, name: e.name })
    );
    _.shuffle(thisMoment);
    
    return thisMoment;
  });
 
  React.useEffect(()=>{
      const isAtView=()=>{
        
            
            if(ref.current){
                const thisEl=ref.current.getBoundingClientRect()
            const windowsHeight=window.innerHeight;
              
            if((windowsHeight +100 > thisEl.top)){
              if(!atView){
                setView(true)
              }
            }
            }
            }
            isAtView()
            window.addEventListener('scroll',isAtView)
            
            return ()=>{
                window.removeEventListener('scroll',isAtView)
            }
      
  },[atView,ref.current])
  if (moment?.length && atView) {
    return (
      <div className={style.title} title="Kéo ảnh sang bên phải hoặc trái!" style={{cursor:"grabbing"}}>
        <Moment src={moment} />
      </div>
    );
  }
  return <div style={{height:'100vh',width:'100vw'}} ref={ref}></div>;
}
