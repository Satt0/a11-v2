import { useState, useEffect } from "react";
import {useColor} from 'lib/hook'

export default function TopPanel({ onClick, index }) {
  const [current, setCurrent] = useState(0);
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const color=useColor()
 
  const list = [
    { name: "Teachers", img: "/card/bg-teacher.jpg" },
    { name: "Girls", img: "/card/bg-girl.JPG" },
    { name: "Boys", img: "/card/bg-boys.jpg" },
    { name: "Moments", img: "/card/bg-leader.JPG" },
  ];
  useEffect(() => {
    setCurrent(index);
  }, [index]);

  return (
    <div className="TopPanel-Container pb-2" style={{userSelect:'none',
    
    backgroundImage:`linear-gradient(
      to right,
      ${color}, 0.7),
      transparent
    )`
    
    }}>
      <div className="preload-bg"         style={{ backgroundImage: `url("${list[(current+1)%list.length].img}")` }}
></div>
      <div
        className="TopPanel-Container-bg ml-2"
        key={"top-pane" + index}
        style={{ backgroundImage: `url("${list[current].img}")` }}
      ></div>
      <div className="TopPanel-Container-text ml-3" key={'text-move'+index}>
        <p className="text-lower m-0">
          <span>Now: </span>
          {list[index].name} <br />
          <span>next:{list[(index + 1) % list.length].name}</span>
        </p>
      </div>
      <div className="ml-auto mr-0 d-flex flex-nowrap mr-3">
        <div key={"btn-left" + state1} className="button-nav" onClick={()=>{setState1(a=>a+1)}}>
          <img
            onClick={onClick((index - 1 + list.length) % list.length)}
            style={{ transform: "rotate(180deg)" }}
            src="/next.svg"
            width="34px"
            height="34px"
          />
        </div>
        <div className="ml-2 button-nav" key={'btn-right'+state2} onClick={()=>{setState2(a=>a+1)}}>
          <img
            onClick={onClick((index + 1) % list.length)}
            src="/next.svg"
            width="34px"
            height="34px"
          />
        </div>
      </div>
    </div>
  );
}
