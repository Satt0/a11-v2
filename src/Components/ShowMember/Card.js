import React from "react";
import { animated } from "react-spring";
import styles from "./Card.module.scss";
import Particle from "../Particle";
import ParentStyles from "./ShowMember.module.scss";
import ScrollText from "./ScrollText";
export default function Card({text, image, moveMore = false, hoverImage }) {
  const [thisState, setThisState] = React.useState({ bg: "", offset: 90 });
  const [focus, setFocus] = React.useState(false);

  const ref = React.useRef(null);
  React.useEffect(() => {
    const getElementOffset = (el) => {
      return (e) => {
        const thisEl = el.getBoundingClientRect();
        const windowsHeight = window.innerHeight;
        const offset = thisEl.top / 10;
        if (windowsHeight + 100 > thisEl.top && thisEl.bottom > -100) {
          let amount = moveMore ? offset : offset / 2;
          el.style.transform = `translateY(${Math.abs(amount)}px)`;
          
        }
        if (thisState.bg === "" && windowsHeight + 700 > thisEl.top) {
          setThisState((s) => ({ ...s, bg: image, offset: 0 }));
        }
      };
    };
    if (ref?.current) {
      window.addEventListener("scroll", getElementOffset(ref.current));
    }

    return () => {
      if (typeof window) {
        window.removeEventListener("scroll", getElementOffset);
      }
    };
  }, [ref, moveMore, focus, thisState]);

  React.useEffect(() => {
    if (focus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [focus]);
  return (
    <div className={ParentStyles.bg}>
      <animated.div
        className={`${styles.card}`}
        ref={ref}
        onClick={() => {
          setFocus(true);
        }}
        style={{ backgroundImage: `url(${thisState.bg})` }}
      ></animated.div>
      {focus ? (
        <div
          className={styles.wrapper}
          onClick={(e) => {
            setFocus(false);
          }}
        >
          <img
            className={styles.images}
            alt="zoom image"
            src={hoverImage || image}
          />
          <div className={styles.overlay}>
            <Particle />
          </div>
          :<></>
        </div>
      ) : (
        <></>
      )}
      <ScrollText isLeft={moveMore} text={text} />
    </div>
  );
}
