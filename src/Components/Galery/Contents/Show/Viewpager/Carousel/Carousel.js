import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getImgPath } from "lib/ulti";
import {useScroll} from 'lib/hook'
export default function Carousel({ length, view, img }) {
  const dispatch = useDispatch();
  const scroll=useScroll()
  const [on, switchOff] = useState(true);
  const [data, setData] = useState([]);
  const [preload, setPreload] = useState([]);
  const [count, setCount] = useState(Math.floor(Math.random() * img.length));
  useEffect(() => {
    let a;

    if (on) {
      a = setInterval(() => {
        setCount((a) => (a + length) % img.length);
      }, 6000);
    }

    return () => {
      clearInterval(a);
    };
  }, [view, length, img, on,count]);
  useEffect(() => {
    const list = [];
    const pre = [];
    for (let i = count; i < count + length; i++) {
      list.push(img[i % img.length]);
      pre.push(img[(i + length) % img.length]);
    }

    setData(list);
    setPreload(pre);
  }, [view, length, img, count]);
  useEffect(() => {
    const pivot = Math.floor(Math.random() * img.length);
    setCount(pivot);
  }, [view, img]);
  useEffect(() => {
    switchOff(scroll)
    
  },[scroll]);
  return (
    <div className="Carousel-Container" id="carousel-id" >
      <div style={{ opacity: 0, position: "absolute", zIndex: -50 }}>
        {preload.map((e, i) => (
          <div
            key={i + "sss"}
            style={{
              backgroundImage: `url("${getImgPath(e.img[0].url)}")`,
            }}
          ></div>
        ))}
      </div>
      {data.map((e, i) => {
      
        return (
          <div
            onClick={() => {
              if (e.hasInfor) {
                dispatch({ type: "updateIndex", payload: e.id });
              } else {
                setCount((a) => (a + 1) % img.length);
              }
            }}
            key={view + "ok" +i}
           
            title={e.name + " (Click)"}
            className={on ? "script-bf-box animated" : "script-bf-box"}
          >
           <img src='/rope.jpg' className="rope isLeft" />
            <img src='/rope.jpg'  className="rope isRight" />
            <div
              key={`${view}-${i}`}
              className="content-carousel"
              style={{
                
                margin: 0,
                padding: 0,
              }}
            >
               
              <div className="bg-main"
                key={e.id}
              style={{
                position:'absolute',
                width:'100%',
                height:'95%',
                top:'2.25%',
                backgroundPositionY:e.hasInfor?'center':'bottom',
                backgroundImage: `url("${getImgPath(e.img[0].url)}")`}}>
            
                <p className="text-title">{e.name}</p> 
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
