import { useSelector, useDispatch } from "react-redux";
import styles from "styles/ViewPager.module.scss";
import { getImgPath } from "lib/ulti";
export default function infor({ index }) {
  const data = useSelector((state) => state.img);
  const infor = data.find((e) => e.id === index);
  const arr = data.filter((e) => e.view === infor.view);
  const next =
    arr[(arr.findIndex((e) => e.id === index && e.hasInfor) + 1) % arr.length];
  const prev = arr[Math.max(arr.findIndex((e) => e.id === index) - 1, 0)];
  const dispatch = useDispatch();
  return (
    <div className={`${styles.infor} pt-5 pb-5 pl-2`}>
      <div
        key={infor.id + "img"}
        className={` text-center ${styles.imgContainer}`}
        style={{
          backgroundImage: `url("${getImgPath(
            infor.mainImage?.url ?? infor.img[0].url
          )}")`,
        }}
      >
        {/* <button
          className="hover"
          onClick={() => {
            dispatch({ type: "toggleIndex" });
          }}
        >
          Close
        </button> */}
      </div>
      <div key={infor.id} className={`${styles.information} w-100`}>
        <h2 className="h1">-{infor.name}-</h2>
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
          <h3>prev</h3>
        </div>
        <div
          onClick={() => {
            dispatch({ type: "toggleIndex" });
          }}
          className={styles.nav + " hover hover-red"}
        >
          <h3>close</h3>
        </div>
        <div
          onClick={() => {
            dispatch({ type: "updateIndex", payload: next.id });
          }}
          className={styles.nav + " hover hover-yellow"}
        >
          <h3>next</h3>
        </div>
      </div>
        
        {/* <div></div> */}
      </div>
      
    </div>
  );
}
