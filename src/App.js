import dynamic from 'next/dynamic'
import {useState,useEffect} from 'react'
import { Parallax } from "react-parallax";
import {useSelector} from 'react-redux'
import Intro from "./Components/Intro/Intro";
import Display from "./Components/Display/Display";
const Galery = dynamic(()=>import('./Components/Galery/Galery'))
const Ending1=dynamic(()=>import('./Components/Ending1/Ending1'))
const Video=dynamic(()=>import('./Components/Contact/Contact'))
const Header=dynamic(()=>import('./Components/Header/Header'))
 
export default function App() {
  // const bg=useSelector(state=>state.bg)
  // const [data,setData]=useState([])
  // const [bgIndex,setBgIndex]=useState(0)
  // useEffect(()=>{
  //   const a=setInterval(()=>{
  //     setBgIndex(i=>(i+1)%bg.length)
  //   },8000)
  //   return ()=>clearInterval(a)
  // },[bg])
  // useEffect(()=>{
  //   console.log(bg);
  //   setData(bg)
  // },[bg])
  return (
    <div
      className="App"
      
    >
      {/* <div 
        key={'app-bg-'+bgIndex}
      style={{
        backgroundImage:`url('${data[bgIndex]?.bg[0].url}')`
      }} className="app-overlay"></div> */}
      <Header />
      <h1 style={{backdropFilter:"blur(12px)"}} className="title-header pt-5 text-center pb-5">#Welcome to A11 Gallery!</h1>
      <Intro />
      
        
          <Display />
       
     
          <Galery />
      
      <Video/>
        <Ending1 />

      
    </div>
  );
}
