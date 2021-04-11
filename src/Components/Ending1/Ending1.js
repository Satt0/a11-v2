import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { useColor } from "lib/hook";
export default function Ending1() {
  const color = useColor();
  return (
    <>
     
        <div
          className="Ending end1"
         
        >
          <h2 className="h4">-The End-</h2>
        
          <h5>last updated: {new Date().toUTCString().substring(0, 16)}</h5>
        </div>
    
    </>
  );
}
