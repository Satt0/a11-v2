import { useSelector } from "react-redux";
import {useState,useEffect} from 'react'

export function useColor() {
    const [state,setState]=useState('')
  const theme = useSelector((state) => state.theme);
  const curTheme = useSelector((state) => state.currentTheme);
useEffect(()=>{
        setState(theme[curTheme])
        console.log(state);
},[theme,curTheme])
  return state;
}
