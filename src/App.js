import dynamic from 'next/dynamic'
import { Parallax } from "react-parallax";
import Intro from "./Components/Intro/Intro";
import Display from "./Components/Display/Display";
import ScrollAnimation from "react-animate-on-scroll";
import { useColor } from "lib/hook";
const Galery = dynamic(()=>import('./Components/Galery/Galery'))
const Ending1=dynamic(()=>import('./Components/Ending1/Ending1'))
const Video=dynamic(()=>import('./Components/Contact/Contact'))
const Header=dynamic(()=>import('./Components/Header/Header'))
export default function App() {
  const color = useColor();
  return (
    <div
      className="App"
      style={{
        background: `linear-gradient(to right,${color},.2),hsla(0,0%,100%,.9) 65%)`,
      }}
    >
      
      <Header />
      <Intro />
      <Parallax
       
        bgImage="/bg7.jpg"
        bgImageAlt="the cat"
        strength={550}
      >
        
          <Display />
       
      </Parallax>
      <Parallax
       
        bgImage="/bg1.jpg"
        bgImageAlt="the cat"
        strength={550}
      >
        <ScrollAnimation animateOnce={true} animateIn="classFadeIn">
          <Galery />
        </ScrollAnimation>
      </Parallax>
     
        <ScrollAnimation animateOnce={true} animateIn="classFadeIn">
          <Video />
        </ScrollAnimation>
      
      <Parallax
      
        bgImage="/bg8.jpg"
        bgImageAlt="the cat"
        strength={550}
      >
      <ScrollAnimation animateOnce={true} animateIn="classFadeIn">
        <Ending1 />
      </ScrollAnimation>
</Parallax>
      
    </div>
  );
}
