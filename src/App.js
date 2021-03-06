import {useEffect} from "react";
import AOS from 'aos'
import Header from "./Components/Header/Header";
// import { Route, Switch } from "react-router-dom";
import Intro from "./Components/Intro/Intro";
import Galery from "./Components/Galery/Galery.js";
import Video from "./Components/Contact/Contact";
import Ending1 from "./Components/Ending1/Ending1";
export default function App() {
  useEffect(()=>{
    AOS.init({once:true})
    return ()=>{
      AOS.refresh()
    }
  },[])
  return (
    <div className="App">
      <Header />

      <Intro />
      <Galery />

      <Video />
      <Ending1 />
    </div>
  );
}
