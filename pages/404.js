import {useEffect,useState} from 'react'

export default function Custom404() {
    const [timer,setTimer]=useState(3);
  
    useEffect(() => {
        let t
        if(timer>0){
           t=setTimeout(()=>{
            setTimer(state=>state-1)
           },1000)
        }
        if(timer===0){
            if(typeof window){
                window.location.href="/"
            }
        }

        return ()=>{
            clearTimeout(t)
        }
    }, [timer])
    const style={
        display:'flex',
        width:'100vw',
        height:'100vh',
        alignItems:'center'
    }
    const text={
        width:'100%',
        textAlign:'center',
        fontSize:'1.5rem'
        
    }
    return <main style={style} >
        <p style={text}>404 - Page Not Found , redirect after {timer} seconds</p>
    </main>
  }