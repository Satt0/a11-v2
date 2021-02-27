import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "aos/dist/aos.css";
import "./About.scss";
export default function About({ itemList }) {
  return (
    <div className="About">
      <>
        <style type="text/css"></style>
      </>

      <Carousel>
        {itemList.map((item,index) => {
          return (
            <Carousel.Item key={index} style={{ backgroundImage: `url(${item.url})` }}>
              <Carousel.Caption>
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
