import { useSelector, useDispatch } from "react-redux";
import styles from "styles/ViewPager.module.scss";
import { getImgPath } from "lib/ulti";
export default function infor({ index }) {
  const data = useSelector((state) => state.img);
  const infor = data.find((e) => e.id === index);
  const arr = data.filter((e) => e.view === infor.view);
  const next = arr[(arr.findIndex((e) => e.id === index && e.hasInfor) + 1) % arr.length];
  const prev = arr[Math.max(arr.findIndex((e) => e.id === index) - 1, 0)];
  const dispatch = useDispatch();
  return (
    <div className={`${styles.infor} pt-5 pb-5 pl-2`}>
      <div
        className={`overflow-hidden text-center ${styles.imgContainer}`}
        style={{ backgroundImage: `url("${getImgPath(infor.img[0].url)}")` }}
      ></div>
      <div className={`${styles.information} w-100 pl-1 pr-1 overflow-auto`}>
        <h2 className="h1">-{infor.name}-</h2>
        <h2 className="h3">
          Role:{" "}
          <strong className="h2">
            "{infor.role ?? "Thành viên chủ chốt"}"
          </strong>
        </h2>
        <h2 className="h2">quote: "{infor.description}"</h2>
        <div></div>
        <div
          onClick={() => {
            dispatch({ type: "updateIndex", payload: prev.id });
          }}
          className={styles.nav}
        >
          <h2>prev</h2>
        </div>
        <div
          onClick={() => {
            dispatch({ type: "updateIndex", payload: next.id });
          }}
          className={styles.nav}
        >
          <h2>next</h2>
        </div>

        <button
          onClick={() => {
            dispatch({ type: "toggleIndex" });
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
