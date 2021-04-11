import Header from "./Components/Header/Header";
// import { Route, Switch } from "react-router-dom";
import { Parallax } from "react-parallax";
import SVG from './Components/SVG/SVG'
import Intro from "./Components/Intro/Intro";
import Galery from "./Components/Galery/Galery.js";
import Video from "./Components/Contact/Contact";
import Ending1 from "./Components/Ending1/Ending1";
import Display from "./Components/Display/Display";
import ScrollAnimation from "react-animate-on-scroll";
import { useColor } from "lib/hook";
export default function App() {
  const color = useColor();
  return (
    <div
      className="App"
      style={{
        background: `linear-gradient(to right,${color},.2),hsla(0,0%,100%,.9) 65%)`,
      }}
    >
      {/* <div  style={{width:"100vw",height:'100vh',display:'flex',alignItems:'center',maxWidth:900,margin:'0 auto'}}>
      <SVG/>
      </div> */}
      <Header />

      <Intro />
      <Parallax
       
        bgImage="/bg4.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <ScrollAnimation animateOnce={true} animateIn="classFadeIn">
          <Display />
        </ScrollAnimation>
      </Parallax>
      <Parallax
       
        bgImage="/bg1.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <ScrollAnimation animateOnce={true} animateIn="classFadeIn">
          <Galery />
        </ScrollAnimation>
      </Parallax>
      <Parallax
      
        bgImage="/bg5.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <ScrollAnimation animateOnce={true} animateIn="classFadeIn">
          <Video />
        </ScrollAnimation>
      </Parallax>
      <Parallax
      
        bgImage="/bg8.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
      <ScrollAnimation animateOnce={true} animateIn="classFadeIn">
        <Ending1 />
      </ScrollAnimation>
</Parallax>
      
    </div>
  );
}
