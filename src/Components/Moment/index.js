import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";
import styles from "./style.module.scss";

import _ from 'lodash'
// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay:  i*60,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1, y: 0 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(0deg) rotateY(${
    r / 10
  }deg) rotateZ(${r/2}deg) scale(${s})`;

export default function Deck({src}) {

 

  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [thisBg,setBg]=useState(src.map((e,i)=>i>src.length-4?e:{...e,url:null}))
  const [props, set] = useSprings(src.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
const onMouseDownHandler=(index)=>{
 return ()=>{
  if(index>=3){
    setBg(s=>{
      const newState=[...s]
      newState[index-3]={...src[index-3]}
      return newState
    })
  }
 }
}
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger){ 
        gone.add(index);} // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
         
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === src.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    }
  );
  
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className={styles.container}>
      
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={"card-deck-"+i}
          onMouseDown={onMouseDownHandler(i)}
          onTouchStart={onMouseDownHandler(i)}
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            ),
          }}
        >
          
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            data-title="Kéo ảnh sang bên phải hoặc trái!"
            
            style={{
              height:`calc(var(--width) * ${1/src[i].ratio})`,
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${thisBg[i].url})`,
            }}
          />
          <p  style={{
              
              transform: interpolate([rot, scale], trans),
              
            }} className={styles.text}>{src[i].name}</p>
        </animated.div>
      ))}
    </div>
  );
}
