import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import style from "./Contact.module.scss";
import wishes from "./wishes";
import { useColor } from "lib/hook";
export default function Video() {
  const color = useColor();
  const data = [
    {
      name: "Kỉ hiếu (2019)",
      url: "https://youtu.be/Vj9RyMifCAE",
    },
    {
      name: "Memories (2018)",
      url: "https://youtu.be/lhsIzX1p_Bs",
    },
    {
      name: "20/11 (2018)",
      url: "https://youtu.be/nTAOuwwOJuk",
    },
    {
      name: "Múa thư pháp (2016)",
      url: "https://youtu.be/p2QbcTbFwxM",
    },
  ];
  const [play, setPlay] = useState(0);
  const [wish, setWish] = useState(0);
  const [bg, toggleBg] = useState(false);
 
  useEffect(() => {
    if (bg) {
      const player = document.getElementById("video");
      player.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [bg]);
  return (
    <>
      <div
        id="video"
        
        className={`${style.VideoContainer} ${bg ? style.black : style.white}`}
      >
        {bg?<button onClick={()=>{toggleBg(false)}} title="close"  className={style.buttonToggle}><img src="/cross.png" width="20px"/></button>:<></>}
        <div
          onClick={()=>{toggleBg(a=>!a)}}
          className={`${style.blurWallpaper} ${
            bg ? style.bgBlack : style.bgImg
          }`}
        ></div>

        <div
          className="Video-Select p-1 shared-inner"
          style={{ minWidth: 300, zIndex: 2, display: bg ? "none" : "" }}
        >
          <div
            className={`${style.caption} p-2`}
            onClick={() => {
              setWish((i) => (i + 1) % wishes.length);
            }}
          >
            <Wish name={wishes[wish].name} wishes={wishes[wish].wishes} />
          </div>
        </div>

        <div
          className={`overflow-hidden container-fluid p-2 d-flex  flex-column${
            bg ? "-reverse" : ""
          } justify-content-center align-items-center`}
          style={{ zIndex: 2, height: "100%" }}
        >
          <div
            className={`${style.portrait} p-0 ${bg?'mt-2':''}`}
            style={{ height: "auto" }}
          >
            <h1 className="title">Playing: {data[play].name}</h1>
            <h3
              onClick={() => {
                setPlay((play + 1) % data.length);
              }}
            >
              next: {data[(play + 1) % data.length].name}
            </h3>
          </div>
          <div
            className={`${bg ? style.on : style.off} ${
              style.videoPlayerContainer
            }`}
            //style={{border:"5px solid white",overflow:"hidden"}}
          >
            <ReactPlayer
              url={data[play].url}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
              playing={bg}
              onPause={() => {
                toggleBg(false);
              }}
              onPlay={() => {
                toggleBg(true);
              }}
              onEnded={() => {
                setPlay((a) => (a + 1) % data.length);
                //toggleBg(true);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
const Wish = ({ name, wishes, change }) => (
  <div className="position-relative pb-3">
    {wishes.map((e, i) => (
      <p key={"wish" + i}>{e}</p>
    ))}
    <p className="text-right w-100">- from Tan -</p>
  </div>
);
