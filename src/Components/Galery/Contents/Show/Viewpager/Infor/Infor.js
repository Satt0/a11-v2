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
          )}")`,
          boxShadow:`${color}, 0.9) 0px 50px 100px -20px,
         ${color}, 0.6) 0px 30px 60px -30px`
        }}
      >
       
      </div>
      <div key={infor.id} className={`${styles.information}`}>
        <h2 className="h1" >-{infor.name}-</h2>
        <h2 className="h3">
          -Role: <strong>"{infor.role ?? "Thành viên chủ chốt"}"</strong>
        </h2>
        <h2 className="h3">-Quote: "{infor.description}"</h2>

        <div className={styles.navContainer}>
        <div
          onClick={() => {
            dispatch({ type: "updateIndex", payload: prev.id });
          }}
          className={styles.nav + " hover hover-yellow"}
        >
          <h3>{'<'}</h3>
        </div>
        <div
          onClick={() => {
            dispatch({ type: "toggleIndex" });
          }}
          className={styles.nav + " hover hover-red"}
        >
          <h3>X</h3>
        </div>
        <div
          onClick={() => {
            dispatch({ type: "updateIndex", payload: next.id });
          }}
          className={styles.nav + " hover hover-yellow"}
        >
          <h3>{'>'}</h3>
        </div>
      </div>
        
        {/* <div></div> */}
      </div>
      
    </div>
  );
}
