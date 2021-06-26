import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null ,zoom:false});

  const updateMousePosition = ev => {
    setMousePosition((s)=>({...s, x: ev.clientX, y: ev.clientY }));
  };
  const onZoom=()=>{
    setMousePosition((s)=>({...s,zoom:true}));

  }
  const offZoom=()=>{
    setMousePosition((s)=>({...s,zoom:false}));

  }
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown",onZoom)
    window.addEventListener("mouseup",offZoom)

    return () => {
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("mousedown",onZoom)
        window.removeEventListener("mouseup",offZoom)
    }
  }, []);

  return mousePosition;
};

const Mouse=()=>{
    const pos=useMousePosition()
   
    return <div className="custom-cursor" style={{position:"fixed",top:pos.y,left:pos.x,transform:`scale(${pos.zoom?"3":"1"})`}}>

    </div>
}

export default Mouse;