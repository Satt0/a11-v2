import { useSelector } from "react-redux";
import {useState,useEffect} from 'react'

export function useColor() {
    const [state,setState]=useState('')
  const theme = useSelector((state) => state.theme);
  const curTheme = useSelector((state) => state.currentTheme);
useEffect(()=>{
        setState(theme[curTheme])
        
},[theme,curTheme])
  return state;
}

export function useScroll(){
  const [toggle,setToggle]=useState(false)
  const index=useSelector(state=>state.index)
  useEffect(() => {
    const action = () => {
      const id = document.getElementById("carousel-id")
      if(id){
        const el=id.getBoundingClientRect();
      const windows = window.pageYOffset;
      
      if (el.bottom < 50 || (el.top / windows >= 5 && el.top > 0)) {
        
        setToggle(false);
      } else {
        setToggle(true);
      }
      }
    };

  if(typeof window !==undefined){
    action()
    window.addEventListener("scroll", action);
  }
    return () => {
      window.removeEventListener("scroll", action);
    };
  },[index]);
  return toggle
}