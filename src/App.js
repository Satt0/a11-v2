import dynamic from 'next/dynamic'
import React from 'react'
import Display from "./Components/Display/Display";
const Ending1=dynamic(()=>import('./Components/Ending1/Ending1'))
import Intro from './Components/Intro/Intro'
import DisplayImage from './Components/ShowMember/index'
import Mouse from '../lib/useMouse';


//  const DisplayImage=dynamic(()=>import ('./Components/ShowMember'))
 const Wrapper=dynamic(()=>import('./Components/Moment/Wrapper'))
export default function App() {
  const [isLock,setLock]=React.useState(true)
  return (
    <div
      className="App"
      
    >
      <Mouse/>
      
    {isLock&& <Intro unLock={()=>{setLock(false)}} />}

        
        {!isLock &&  <>
          
          <Display />
        <h1  className="title-header pt-5 text-center pb-5">#MEMBERS</h1>

    <DisplayImage/>
        {/* <Galery /> */}
        <h1  className="title-header pt-5 text-center pb-5">#MOMENTS</h1>

    <Wrapper/>
    {/* <Video/> */}
      <Ending1 />

        </>}
      
    </div>
  );
}
