import React, { useState, useEffect } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { useSelector, useDispatch } from "react-redux";
export default function Header() {
  const currentTheme = useSelector((state) => state.currentTheme);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [sc, setSc] = useState(true);

  useEffect(() => {
    let a;
    if (!sc) {
      a = setTimeout(() => {
        setSc(true);
      }, 4000);
    }
    return () => {
      clearTimeout(a);
    };
  }, [sc]);

  return (
    <>
      <button
        className={!toggle ? "btn-toggle show" : "btn-toggle"}
        onClick={() => {
          setToggle((a) => !a);
        }}
      >
        {toggle ? "hide" : "show"}
      </button>
      <header id="header" className={toggle ? "" : "noBg"}>
        <div className="main-header">
          <ScrollIntoView selector="#intro">
            <div id="brand-logo" className="ml-5 ">
              <img
                style={{ cursor: "pointer" }}
                src="/favicon.ico"
                width="60px"
                height="60px"
              />
            </div>
          </ScrollIntoView>
        </div>
        <div className={"dropdown "}>
          <div className="link-container">
            <ScrollIntoView selector="#story">
              <li>Welcome</li>
            </ScrollIntoView>
            <ScrollIntoView selector="#galery">
              <li>Intro</li>
            </ScrollIntoView>
            <ScrollIntoView selector="#video">
              <li>Video</li>
            </ScrollIntoView>
          </div>
        </div>
        <div className="sound-cloud-container">
          <iframe
            width="100%"
            height="380"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/929815216&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </header>
    </>
  );
}
