import React from "react";
import Card from "./Card";

export default function SidePanel({ onClick, index }) {
  const list = [
    { name: "Teachers", img: "/card/bg-teacher.jpg" },
    { name: "Girls", img: "/card/bg-girl.JPG" },
    { name: "Boys", img: "/card/bg-boys.jpg" },
    { name: "Moments", img: "/card/bg-leader.JPG" },
  ];
  
  return (
    <div className="SidePanel">
      {list.map((e, i) => (
        <div
          key={i}
          onClick={onClick(i)}
          className={index === i ? "Card-container selected" : "Card-container"}
        >
          <Card
            zoom={index === i}
            mul={i + 1}
            name={list[i].name}
            bg={list[i].img || null}
          />
        </div>
      ))}
    </div>
  );
}
