import {useState,useEffect} from "react";
export default function TopPanel({onClick,index}) {
  const [current,setCurrent]=useState(0)
  const list = [
    { name: "Teachers", img: "/card/bg-teacher.jpg" },
    { name: "Girls", img: "/card/bg-girl.JPG" },
    { name: "Boys", img: "/card/bg-boys.jpg" },
    { name: "Moments", img: "/card/bg-leader.JPG" },
  ];
  useEffect(() => {
    setCurrent(index)
  }, [index])
  return (
    <div className="TopPanel-Container mt-2 mb-2">
      <div
      className="TopPanel-Container-bg ml-2"
      style={{backgroundImage:`url("${list[current].img}")`}}
      >
        
      </div>
      <div className="TopPanel-Container-text ml-3">
      
        <p className="text-lower m-0"><span>Now: </span>{list[index].name}  <br/><span>next:{list[(index+1)%list.length].name}</span></p>
      </div>
      <div className="ml-auto mr-4">
      <img
        onClick={onClick(((index-1)+list.length)%list.length)}
        style={{transform:'rotate(180deg)'}}
       src='/next.svg' width="34px" height="34px"/>
      <img
      className="ml-1"
        onClick={onClick((index+1)%list.length)}
       src='/next.svg' width="34px" height="34px"/>
      </div>
    </div>
  );
}
