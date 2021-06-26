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
      <h1 className="text-center">Introduction</h1>
      <p>
        "Childhood, teenage or adulthood passed and gave back many great memories in
        the moving life of every one. But perhaps, Teenage or Youth is the period that we had so many things to
        memorize and regret. During that time,
        Youth as well as our friendship is so pure and beautiful .
      </p>
      <p>
        The best memory of my youth is meeting You, enjoying our school life in A11
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
  

  return (
    <>
    
  
    <div id="intro" className={`${styles.container} ${styles.bg1}`}>
      <div className={styles.paragraph} style={{marginLeft:"10vw"}}>
  
        <div className={styles.group} >
         
          {posts.vn }
          <p className="text-right">**a11-k52-lg1**</p>
         
       
            
        </div>
      </div>
    </div>  

    <div className={`${styles.container} ${styles.bg2}`}>
      <div className={styles.paragraph} style={{margin:'0 auto'}}>
  
        <div className={` ${styles.mr}`}>
         
        <p>
        A11 Family thân mến!
          </p> 
<p>            Vậy là chúng ta đã xa nhau được {(new Date()).getFullYear()-2019} năm rồi. Các bạn vẫn khỏe chứ 🤔 Đây là một website mà mình tạo ra với những kỉ niệm học sinh của chúng ta ngày đó. Hãy cùng xem và tận hưởng nhé!
</p>         
         <p className="text-right">from Tan</p>
       
            
        </div>
      </div>
    </div>  
    </>
  );
};

export default Display;
