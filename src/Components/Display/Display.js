import styles from "./Display.module.scss";
// import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import React from "react";
const posts = {
  vn: (
    <>
      <h1 className="text-center">Lời mở đầu</h1>
      <p>
        " Tuổi thơ,tuổi già hay tuổi thanh xuân cũng đều có thể ghi lại một hoặc
        nhiều dấu ấn lớn trong cuộc đời của mỗi con người.Nhưng có lẽ tuổi thanh
        xuân, tuổi trẻ là khoảng thời gian mà con người ta nhớ nhung nhất và
        cũng luyến tiếc nhất. Trong kẽ hở của thời gian và hiện thực, tuổi thanh
        xuân cũng như sắc đẹp, mỏng manh và như trang giấy bị gió hong khô.
      </p>
      <p>
        Điều tuyệt vời nhất trong thanh xuân của tôi là được gặp các cậu, được
        sống chung với nhau dưới mái nhà A11-K52-LG1. Ba năm, khoảng thời gian
        không dài, không ngắn nhưng cũng đủ làm nên thanh xuân trọn vẹn của tôi,
        của mỗi chúng ta.
      </p>
      <p>
        Các chàng trai, cô gái A11-K52, cho dù sau này các cậu trở thành người
        đàn ông, người phụ nữ của ai đi nữa thì các cậu vẫn luôn là chàng trai
        cô gái trong lòng chúng ta."
      </p>
    </>
  ),
  en: (
    <>
      <h1 className="text-center">Itroduction</h1>
      <p>
        "Childhood, teenage or adulthood passed and gave back many great memories in
        the moving life of every one. But perhaps, Teenage or Youth is the period that we had so many things to
        memorize and regret. During that time,
        Youth as well as our friendship is so pure and beautiful .
      </p>
      <p>
        The best memories of my youth is meeting You, studying together in A11
        family. Three years, not long enough to be together, but it is enough to make a
        strong and beautiful friendship among all of us.
      </p>
      <p>
       Hey boys and girls, whoever men or women you will become ,You guys are always the boys and girls in our hearts, always a member of our family! "
      </p>
    </>
  ),
};
const Display = () => {
  const [lang, setLang] = useState(true);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang === "vi") {
      if (!sticky) setLang(true);
    } else {
      if (sticky) setLang(false);
    }
  }, []);
  useEffect(() => {
    const handler = () => {
      if (typeof window !== undefined) {
        const story = document.getElementById("story");
        const el = story.getBoundingClientRect();

        if (
          el.y < 0 &&
          story.offsetHeight + el.y > story.offsetHeight * 0.25 &&
          window.innerWidth > 1400
        ) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <div id="story" className={styles.container}>
      <div className={styles.paragraph}>
        <div
          onClick={() => {
            setLang((state) => !state);
          }}
          className={styles.langBtn}
          title="click to change language"
        >
          <button
            style={{
              position: sticky ? "fixed" : "relative",
              top: sticky ? "8vh" : 0,
            }}
          >
            {lang ? "VI" : "EN"}/
            <span style={{ fontSize: "1rem" }}>{!lang ? "VI" : "EN"}</span>
          </button>
        </div>

        <div className={styles.group}>
          {lang ? posts.vn : posts.en}
          <p className="text-right">**a11-k52-lg1**</p>
          <figure>
            <img src="uploads/IMG_0540_8d6a42f7a8.JPG" width="100%" />
            <figcaption className="text-center">-March 2019-</figcaption>
          </figure>
       
       
            
        </div>
      </div>
    </div>
  );
};

export default Display;
