

import Header from "./Components/Header/Header";
// import { Route, Switch } from "react-router-dom";
import Intro from "./Components/Intro/Intro";
import Galery from "./Components/Galery/Galery.js";
import Video from "./Components/Contact/Contact";
import Ending1 from "./Components/Ending1/Ending1";
import Display from './Components/Display/Display'
import ScrollAnimation from "react-animate-on-scroll";

export default function App() {

  return (
    <div className="App">
      <Header />

      <Intro />
      <ScrollAnimation animateOnce={true} animateIn="classFadeIn">
      <Display />
</ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="classFadeIn">
      <Galery />
</ScrollAnimation>
<ScrollAnimation animateOnce={true} animateIn="classFadeIn">
      <Video />
</ScrollAnimation>
<ScrollAnimation animateOnce={true} animateIn="classFadeIn">
   
      <Ending1 />
</ScrollAnimation>
    </div>
  );
}
