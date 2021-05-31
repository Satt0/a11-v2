import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "styles/FlipCard.module.scss";
import { getImgPath } from "lib/ulti";

export default function App() {
  const img = useSelector((state) => {
    const data = state.bg;
    if (data.length) {
      for (let i = data.length - 1; i >= 0; i--) {
        const index = Math.floor(Math.random() * i);
        const temp = data[i];
        data[i] = data[index];
        data[index] = temp;
      }
    }

    return data;
  });
  const [data, setData] = useState([]);
  const [preload, setPreload] = useState([]);
  const [width, setWidth] = useState(0);
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
  useEffect(() => {
    const onResize = () => {
      if (typeof window !== undefined) {
        const width = window.innerWidth;

        setWidth(Math.max(width, 450));
      }
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [preload]);

  return (
    <div
      className={styles.bg}
      style={{
        width: width * img.length,
        animationDuration: `${img.length * 30}s`,
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
              backgroundImage: `url("${getImgPath(e?.bg[0].url || "")}")`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
