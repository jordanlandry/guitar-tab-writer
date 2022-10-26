import React, { useContext, useEffect, useState } from "react";
import nextId from "react-id-generator";
import { songType } from "../data/interfaces";
import Lines from "./Lines";
import { SpeedContext } from "./TabPage";

type Props = { data: songType };

export default function Chart({ data }: Props) {
  const [width, setWidth] = useState(window.innerWidth);

  // Update the width when the window is resized
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dataElements = data.tuning.map((note) => {
    return (
      <span key={nextId()}>
        <div className="uppercase">
          {/* Tuning */}
          <span
            style={{
              backgroundColor: "white",
              position: "absolute",
              transform: "translateY(-10px)",
              padding: "2px",
              fontSize: "1.1rem",
              zIndex: 5,
            }}
          >
            {note.length === 2 ? note[0] : `${note[0]}${note[1]}`}
          </span>
        </div>
        <br />
      </span>
    );
  });

  const noteElements = data.data.map((notes, index) => {
    let mx = (index * width) / 2;
    const n = notes.map((note) => {
      // let nx = 50 + (note.beatCount * index) / 32;

      let nx = 50 + note.beatCount * (width / 64);
      let ny = 37 + note.guitarString * 18;
      // let ny = 80 + note.guitarString * 25;

      // let ny = 80;
      return (
        <div
          key={nextId()}
          style={{
            position: "absolute",
            top: ny + "px",
            left: nx + mx + "px",
            backgroundColor: "white",
            padding: "2px",
            borderRadius: "5px",
          }}
        >
          {note.fret}
        </div>
      );
    });

    return <div key={nextId()}>{n}</div>;
  });

  const measureElements = data.data.map((measure, i) => {
    // There will be 2 positions for mx
    let mx = i % 2 === 0 ? 35 : 35 + width / 2;
    let my = 65 + 125 * Math.floor(i / 2);

    if (mx > width) {
      mx = 35;
      my += 12;
    }

    return (
      <div key={nextId()}>
        {i % 2 === 0 ? <Lines tuning={data.tuning} top={my} /> : null}
        <div
          className="measure-line"
          style={{
            position: "absolute",
            top: my + "px",
            left: mx + "px",
            width: "3px",
            height: "95px",
          }}
        />
      </div>
    );
  });

  return (
    <div className="chart-wrapper">
      {dataElements}
      {measureElements}
      {noteElements}
    </div>
  );
}
