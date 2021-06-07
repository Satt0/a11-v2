import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "styles/FlipCard.module.scss";
import { getImgPath } from "lib/ulti";

export default function App({ img, elRef ,speed=30}) {
  const [data, setData] = useState([]);
  const [preload, setPreload] = useState([]);
  const [width, setWidth] = useState(700);
 useEffect(() => {
    const handler = (ref) => {
      return () => {
        if (ref?.current?.offsetWidth) {
          setWidth(Math.max(ref.current.offsetWidth, 650) || 650);
        }
      };
    };
    handler(elRef)();

    window.addEventListener("resize", handler(elRef));
  }, [elRef]);

  // preload 2 bg
  useEffect(() => {
    if (img.length) {
      if (img.length > 2) {
        setPreload(img);
        setData([img[0], img[1]]);
      } else {
        setData(img);
      }
    }
  }, [img]);
  // load bg after every 5s
  useEffect(() => {
    let a;
    if (preload.length > 2) {
      a = new Array(preload.length - 2);
      for (let i = 0; i < a.length; i++) {
        a[i] = setTimeout(() => {
          setData((state) => [...state, preload[(i + 2) % preload.length]]);
        }, (i + 1) * 5000);
      }
    }
    return () => {
      if (a) {
        a.forEach((timeout) => {
          clearTimeout(timeout);
        });
      }
    };
  }, [preload]);
  // change width on resize window

  if (img?.length) {
    return (
      <div
        className={styles.bg}
        style={{
          width: width * img.length,
          animationDuration: `${img.length * speed}s`,
        }}
      >
        {[...data, data[0]].map((e, i) => {
          return (
            <div
              key={"bg-carousel-" + i}
              className={styles.itemBg}
              style={{
                left: i * width,
                width: width,
                overflow: "hidden",
                filter: !e?.name ? "blur(2px)" : "",
                backgroundImage: `url("${
                  !e?.name
                    ? getImgPath(e?.bg[0]?.url)
                    : getImgPath(e?.img[0]?.url)
                }")`,
              }}
            >
              {e?.name ? <p className={styles.textTitle}>{e.name}</p> : null}
            </div>
          );
        })}
      </div>
    );
  }
  return <p>loading</p>;
}
