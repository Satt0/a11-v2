import styles from "./Display.module.scss";
// import { useSelector } from "react-redux";

import ScrollAnimation from "react-animate-on-scroll";

import React from "react";
const posts=[
    {
        title:'We Are A11 Family!',
        img:'uploads/IMG_0540_8d6a42f7a8.JPG',
        markdown:<>
            Text goes here.

        </>

    },
    {
        title:'We Are From LG1!',
        img:'uploads/62013178_2265769397073980_5691405672399241216_n_2edc443686.jpg',
        markdown:<>
          Text goes here.

        </>

    },
    {
        title:'We Love Our People!',
        img:'uploads/65055791_2396914737210439_5405818453481226240_n_29b0fbc380.jpg',
        markdown:<>
        <p>Text goes here.</p>

    </>
        

    },
]
const Display = () => {
 

  return (
    <div id="story" className={styles.container}>
      <div className={styles.paragraph}>
        <button className={styles.langBtn} title="click to change language">
          EN-VI
        </button>
        
        <div className={styles.group}>
          
          
          {
              posts.map((e,i)=>{
                  const isOdd=i%2==1;
                  return (
                          <ScrollAnimation animateOnce={true} animateIn="classSlideUp">

                    <h1 className={`text-${!isOdd?'left':'right'} h3 pl-3 pr-3`}>{e.title}</h1>
                  <div className={styles.groupText} style={{direction:isOdd?"rtl":"ltr"}}>
                    <img src={e.img} />
                    <p children={e.markdown}/>
                      
                    
                  </div>

                  </ScrollAnimation>)
              })
          }
          
        </div>
      </div>
    </div>
  );
};

export default Display;
