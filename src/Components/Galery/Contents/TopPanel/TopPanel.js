import { useState, useEffect } from "react";
import { useColor } from "lib/hook";

export default function TopPanel({ onClick, index }) {
  const [current, setCurrent] = useState(0);
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const color = useColor();

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
    <>
     <div
        className="preload-bg"
        style={{
          backgroundImage: `url("${list[(current + 1) % list.length].img}")`,
        }}
      ></div>
    <div
      className="TopPanel-Container pb-2"
      style={{
        userSelect: "none",
      }}
    >
     
       <div className="ml-auto mr-0 d-flex flex-nowrap mr-3">
        <div
          key={"btn-left" + state1}
          className="button-nav"
          onClick={() => {
            setState1((a) => a + 1);
          }}
        >
          <img
            onClick={onClick((index - 1 + list.length) % list.length)}
            style={{ transform: "rotateY(180deg)" }}
            src="/right-arrow.png"
            width="34px"
            height="34px"
          />
        </div>
        
      </div>
      <div
        className="TopPanel-Container-bg"
      >
        <div
        className="TopPanel-Container-bg-content"
        key={"top-pane" + index}
        style={{ backgroundImage: `url("${list[current].img}")` }}
        >
          <p className="text-lower title-panel m-0">
         
          {list[index].name} 
       
        </p>
        </div>

      
      </div>
      <div className="ml-auto mr-0 d-flex flex-nowrap mr-3">
        
        <div
          className="ml-2 button-nav"
          key={"btn-right" + state2}
          onClick={() => {
            setState2((a) => a + 1);
          }}
        >
          <img
            onClick={onClick((index + 1) % list.length)}
            src="/right-arrow.png"
            width="34px"
            height="34px"
          />
        </div>
      </div>
    </div></>
  );
}
