import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import style from './style.module.scss'
import Moment from "./index";
export default function Wrapper() {
    const [atView,setView]=React.useState(false)
    const ref=React.useRef(null)
    const [moment,setMoment]=React.useState([])
  const src = useSelector((state) => state.img);
 React.useEffect(()=>{
   if(src.length>0){
        setMoment(s=>{
          const thisMoment = [...src.filter((e) => e.view === "moment")].map(
            (e) => ({ url: e.img[0].url, name: e.name ,ratio:e.img[0].width/e.img[0].height})
          );
          
          return _.shuffle(thisMoment);;
        })
   }
 },[src])
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
      <div className={style.title}  style={{cursor:"grabbing"}}>
        <Moment src={moment} />
      </div>
    );
  }
  return <div style={{height:'100vh',width:'100vw'}} ref={ref}></div>;
}
