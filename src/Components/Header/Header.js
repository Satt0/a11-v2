import React, { useState, useEffect } from "react";
import ScrollIntoView from "react-scroll-into-view";
import {useSelector,useDispatch} from 'react-redux'
export default function Header() {
  const currentTheme=useSelector(state=>state.currentTheme)
  const theme=useSelector(state=>state.theme)
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false);
  const [sc, setSc] = useState(true);
  useEffect(() => {
   let a= setInterval(()=>{
    dispatch({type:'changeTheme',payload:currentTheme})
   },20000)
   return (()=>{clearInterval(a)})
  }, []);
  useEffect(()=>{
    let a  
    console.log(sc);
    if(!sc){
        a=setTimeout(()=>{
          setSc(true)
        },4000)
      }
      return ()=>{
        clearTimeout(a)
      }
  },[sc])

  return (
    <>
      <header
      
        id="header"
        className={toggle ? "" : "noBg"}
        style={{background:toggle?`linear-gradient(190deg,${theme[currentTheme]},.4),hsla(0,0%,100%,.8) 65%)`:`linear-gradient(190deg,${theme[currentTheme]},.1),hsla(0,0%,100%,0) 35%)`}}
      >
        <div className="main-header">
          <ScrollIntoView selector="#intro">
            <img
              style={{ cursor: "pointer" }}
              className="ml-5"
              src="/favicon.ico"
              width="60px"
              height="60px"
            />
          </ScrollIntoView>

          <button
            className={!toggle ? "btn-toggle show" : "btn-toggle"}
            onClick={() => {
              setToggle((a) => !a);
            }}
          >
            {toggle ? "hide" : "show"}
          </button>
        </div>
        <div className={toggle ? "dropdown " : "dropdown hide"}>
          {/* <ScrollIntoView selector="#intro">
            <li>Home</li>
          </ScrollIntoView> */}
          <div className="link-container">
            <ScrollIntoView selector="#galery">
              <li>Intro</li>
            </ScrollIntoView>
            <ScrollIntoView selector="#video">
              <li>Video</li>
            </ScrollIntoView>
              <li
              onClick={()=>{
                dispatch({type:'changeTheme',payload:currentTheme})
              }}
              >change Theme</li>
          </div>
        </div>
        <div className="sound-cloud-container">
          <button
            title="click to open sound cloud"
            onClick={() => {
              setSc((a) => !a);
            }}
          >
            <img
              src="/sc.png"
              alt="soundclound icon"
              width="32px"
              height="32px"
            />
          </button>
          <iframe
            className={sc ? "sc show" : "sc hide"}
            width="300px"
            height="400px"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="Sound clound"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/929815216&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
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
