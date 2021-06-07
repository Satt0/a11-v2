import React from "react";
import Viewpager from "./Viewpager/Viewpager";
import { useSelector } from "react-redux";
import FlipCard from "src/Components/Intro/FlipCard";
export default function Show({ length, view ,title="Member"}) {
  const ref = React.useRef(null);
  const [thisImg, setThisImg] = React.useState(null);
  const img = useSelector((state) => {
    return state.img.filter((e) => {
      if (view === "girl") {
        return e.view === "boy" || e.view === "girl";
      } else {
        return e.view === view;
      }
    });
  });
  React.useEffect(() => {
    const data = [...img];
    for (let i = data.length - 1; i >= 0; i--) {
      const index = Math.floor(Math.random() * i);
      const temp = data[i];
      data[i] = data[index];
      data[index] = temp;
    }
    setThisImg(data);
  }, []);

  if (thisImg) {
    return (
      <>

      <div className="Show" ref={ref}>
        <><h2 className="title-header h3 text-center">{title}</h2></>
        {view !== "moment" ? (
          <Viewpager img={thisImg || []} length={length} view={view} />
        ) : (
          <div className="flip-card-ctn">

            <FlipCard elRef={ref} speed={22} img={thisImg} />
          </div>
        )}
      </div> </>
    );
  }
  return <p>loading</p>;
}
