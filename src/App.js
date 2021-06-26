import dynamic from 'next/dynamic'
import React from 'react'
import Display from "./Components/Display/Display";
const Ending1=dynamic(()=>import('./Components/Ending1/Ending1'))
import Intro from './Components/Intro/Intro'
 const DisplayImage=dynamic(()=>import ('./Components/ShowMember'))
 const Wrapper=dynamic(()=>import('./Components/Moment/Wrapper'))
export default function App() {
  const [isLoad,setIsload]=React.useState(false)
  
  return (
    <div
      className="App"
      
    >
      
      
     {!isLoad&& <Intro unLock={()=>{setIsload(true)}} />}

        
          {isLoad&&<>
          
            <Display />
          <h1  className="title-header pt-5 text-center pb-5">#MEMBER</h1>

      <DisplayImage/>
          {/* <Galery /> */}
          <h1  className="title-header pt-5 text-center pb-5">#MOMENT</h1>

      <Wrapper/>
      {/* <Video/> */}
        <Ending1 />

          </>}
      
    </div>
  );
}
