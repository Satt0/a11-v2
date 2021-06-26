import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import style from "./Contact.module.scss";
import wishes from "./wishes";
import { useColor } from "lib/hook";
import Card from '../ShowMember/Card'
export default function Video() {
  const color = useColor();
  const data = [
    {
      name: "Kỉ hiếu (2019)",
      url: "https://youtu.be/Vj9RyMifCAE",
      bg:'http://i3.ytimg.com/vi/Vj9RyMifCAE/maxresdefault.jpg'
    },
    {
      name: "Memories (2018)",
      url: "https://youtu.be/lhsIzX1p_Bs",
      bg:'http://i3.ytimg.com/vi/lhsIzX1p_Bs/hqdefault.jpg'
    },
    {
      name: "20/11 (2018)",
      url: "https://youtu.be/nTAOuwwOJuk",
      bg:'http://i3.ytimg.com/vi/nTAOuwwOJuk/maxresdefault.jpg'
    },
    {
      name: "Múa thư pháp (2016)",
      url: "https://youtu.be/p2QbcTbFwxM",
      bg:'http://i3.ytimg.com/vi/p2QbcTbFwxM/hqdefault.jpg'
    },
  ];
 
 
  return (
    <>
      <h1 className="title-header text-center">#Video</h1>
      <div
        id="video"
        
        className={`${style.VideoContainer}`}
      >
        {data.map((v,i)=><div className={style.vd}><Card image={v.bg} hoverImage={v.bg}/></div>)}
      </div>
    </>
  );
}

