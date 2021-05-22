import React,{useEffect} from "react";
import Card from "./Card";
import {useScroll} from 'lib/hook'
export default function SidePanel({ onClick, index }) {
  const list = [
    { name: "Teachers", img: "/card/bg-teacher.jpg" },
    { name: "Girls", img: "/card/bg-girl.JPG" },
    { name: "Boys", img: "/card/bg-boys.jpg" },
    { name: "Moments", img: "/card/bg-leader.JPG" },
  ];
  const [toggle,setToggle]=React.useState(false)
  const scroll=useScroll()
  useEffect(()=>{
   
   
    if(scroll===true){
      setToggle(true)
      
     
    }
    
    
  },[scroll])
  useEffect(()=>{
    let a
      if(toggle){
        a=setTimeout(()=>{
          setToggle(false)
        },5000)
      }
      return ()=>clearTimeout(a)
  },[toggle])
  return (
    <div className="SidePanel">
     
     <div className={`SidePanel-container ${toggle?'on':'off'}`}>
     {list.map((e, i) => (
        <div
          key={i}
          onClick={onClick(i)}
          
          className={index === i ? "Card-container selected" : "Card-container"}
        >
          <Card
            zoom={index === i}
            mul={i + 1}
            name={list[i].name}
            bg={list[i].img || null}
          />
        </div>
      ))}
     </div>
      <button
      title="toggle side bar"
      style={{
        transform:`rotateY(${toggle?'0':'180deg'})`
      }}
      onClick={()=>{
        setToggle(state=>!state)
      }}
      className="hide-side"><img width="30px" src="/right-arrow.png"/></button>
    </div>
  );
}
