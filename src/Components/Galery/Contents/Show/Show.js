import React from "react";
// import Data from './Slide'
import Viewpager from "./Viewpager/Viewpager";
import { useSelector } from "react-redux";
export default function Show({ length, view }) {
  const img = useSelector((state) => state.img.filter((e) => e.view === view));

  return (
    <div className="Show">
      {img.length ? <Viewpager img={img} length={length} view={view} /> : <></>}
    </div>
  );
}
