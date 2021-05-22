import { useSelector, useDispatch } from "react-redux";
import styles from "styles/ViewPager.module.scss";
import { getImgPath } from "lib/ulti";
import {useEffect} from 'react'
import {useColor} from 'lib/hook'
export default function infor({ index }) {
  const data = useSelector((state) => state.img);
  const infor = data.find((e) => e.id === index);
  const arr = data.filter((e) => e.view === infor.view);
  const color=useColor()
  const next =
    arr[(arr.findIndex((e) => e.id === index && e.hasInfor) + 1) % arr.length];
  const prev = arr[Math.max(arr.findIndex((e) => e.id === index) - 1, 0)];
  const dispatch = useDispatch();
  useEffect(() => {
    const a=setTimeout(()=>{
      dispatch({ type: "updateIndex", payload: next.id });
    },10000)
   return ()=>{
     clearTimeout(a)
   }
  },[next.id])
  return (
    <div className={`${styles.infor}`}>
      <div
        key={infor.id + "img"}
        className={` text-center ${styles.imgContainer}`}
        style={{
          backgroundImage: `url("${getImgPath(
            infor.mainImage?.url ?? infor.img[0].url
          )}")`
        }}
      >
       
      </div>
      <div key={infor.id} className={`${styles.information}`}>
        <h2 className="h1" >** {infor.name}**</h2>
        <h2 className="h3">
          Role: <strong>"{infor.role ?? "Thành viên chủ chốt"}"</strong>
        </h2>
        <h2 className="h3">Quote: "{infor.description}"</h2>

        <div className={styles.navContainer}>
        <div
          onClick={() => {
            dispatch({ type: "updateIndex", payload: prev.id });
          }}
          className={styles.nav + " hover hover-yellow"}
        >
          <><img key="prev" style={{transform:'rotateY(180deg)'}} src="/right-arrow.png" width="50px"/></>
        </div>
        <div
          onClick={() => {
            dispatch({ type: "toggleIndex" });
          }}
          className={styles.nav + " hover hover-red"}
        >
        <img key="close" src="/cross.png" width="30px"/>
        </div>
        <div
          onClick={() => {
            dispatch({ type: "updateIndex", payload: next.id });
          }}
          className={styles.nav + " hover hover-yellow"}
        >
          <img key="next" src="/right-arrow.png" width="50px"/>
        </div>
      </div>
        
        {/* <div></div> */}
      </div>
      
    </div>
  );
}
