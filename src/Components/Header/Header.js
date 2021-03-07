import React, { useEffect, useState, useRef } from "react";
import ScrollIntoView from "react-scroll-into-view";

export default function Header() {
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [mouse, setMouse] = useState(false);


  return (
    <>
      <header id="header" className={toggle?'hasBg':'noBg'}>
          <div className="main-header">
          <a href="#intro" className="ml-5">
            <img src='/favicon.ico' width="60px" height="60px"/>
          </a>

        <button className="btn-toggle" onClick={()=>{setToggle(a=>!a)}}>{toggle?'hide':'show'}</button>
          </div>
        <div className={toggle?'dropdown':"dropdown hide"}>
         <div>
         <li>Intro</li>
          <li>Video</li>
         </div>
          <li className="sound-cloud">Sound Cloud</li>
        </div>
       
      </header>
     
    </>
  );
}



// <figure
//           id="music-player"
//           className={!toggle ? "style mr-2 mt-5" : "nostyle"}
//           onMouseEnter={() => {
//             setMouse(true);
//             console.log("ok");
//           }}
//           onMouseLeave={() => {
//             setMouse(false);
//           }}
//           ref={ref}
//         >
//           <iframe
//             width="100%"
//             height="450"
//             scrolling="no"
//             frameBorder="no"
//             allow="autoplay"
//             title="Sound clound"
//             src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/929815216&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
//           ></iframe>
         
//         </figure>

//         <div className="link-container w-100">
//           <ScrollIntoView selector="#galery" className="ml-2">
//             <li>Intro</li>
//           </ScrollIntoView>

//           <ScrollIntoView selector="#video">
//             <li>Video</li>
//           </ScrollIntoView>
//           <li
//             className="ml-auto"
//             onClick={() => {
//               setToggle((state) => !state);
//             }}
//           >
            
//             {toggle ? "Hiện SoundCloud" : "Ẩn SoundCloud"}
//           </li>
//         </div>
