import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getImgPath } from "lib/ulti";
import {useColor} from 'lib/hook'
export default function Carousel({ length, view, img }) {
  const dispatch = useDispatch();
  const color=useColor()
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
    const action = () => {
      const el = document.getElementById("carousel-id").getBoundingClientRect();
      const windows = window.pageYOffset;
      if (el.bottom < 50 || (el.top / windows >= 5 && el.top > 0)) {
        switchOff(false);
      } else {
        switchOff(true);
      }
    };

    window.addEventListener("scroll", action);
    return () => {
      window.removeEventListener("scroll", action);
    };
  });
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
        // const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        //   Math.random() * 256
        // )}, ${Math.floor(Math.random() * 256)}`;
        return (
          <div
            onClick={() => {
              if (e.hasInfor) {
                dispatch({ type: "updateIndex", payload: e.id });
              } else {
                setCount((a) => (a + 1) % img.length);
              }
            }}
            key={i + "ok"}
           
            title={e.name + " (Click)"}
            className={on ? "script-bf-box animated" : "script-bf-box"}
          >
            <div
              key={e.id}
              className="content-carousel"
              style={{
                backgroundImage: `url("${getImgPath(e.img[0].url)}")`,
                boxShadow: `${color}, 0.7) 0px 15px 25px`,
                margin: 0,
                padding: 0,
              }}
            >
              
              {!e.hasInfor ? <p className="text-title">{e.name}</p> : ""}
            </div>
          </div>
        );
      })}
    </div>
  );
}
