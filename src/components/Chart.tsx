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
              transform: "translateY(50px)",
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

  const STRING_COUNT = data.tuning.length;

  const LINE_HEIGHT = 18;
  const BASE_X = 50;
  const BASE_Y = 102;
  const X_OFFSET = width / 64;

  // Notes
  const noteElements = data.data.map((notes, index) => {
    let lineCount = Math.floor(index / 2);
    let measureCount = index % 2; // 0 or 1 (0 is left, 1 is right)

    const n = notes.map((note) => {
      let noteX =
        BASE_X + X_OFFSET * note.beatCount + (width / 2) * measureCount;

      let noteY =
        BASE_Y +
        note.guitarString * LINE_HEIGHT +
        lineCount * LINE_HEIGHT * (STRING_COUNT + 1) -
        2; // StringCount + 1 because there is 1 line after each bar, - 2 to center it

      return (
        <div
          key={nextId()}
          style={{
            backgroundColor: "white",
            position: "absolute",
            left: `${noteX}px`,
            top: `${noteY}px`,
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
    let my = 127 + 125 * Math.floor(i / 2);

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
