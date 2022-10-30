import React, { useContext, useEffect, useState } from "react";
import nextId from "react-id-generator";
import { songType } from "../data/interfaces";
import Lines from "./Lines";
import { InstrumentContext } from "./TabPage";

type Props = { data: songType };

export default function Chart({ data }: Props) {
  const [width, setWidth] = useState(window.innerWidth);

  const activeInstrument = useContext(InstrumentContext)!;

  // Update the width when the window is resized
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Note properties for sizing and positioning
  const STRING_COUNT = data.tuning.length;
  const LINE_HEIGHT = 18;
  const BASE_X = 45;
  const BASE_Y = 103;
  const X_OFFSET = width / 64;

  // Show the tuning
  const dataElements = data.tuning.map((note) => {
    return (
      <span key={nextId()}>
        <div className="uppercase">
          {/* Tuning */}
          <span
            style={{
              backgroundColor: "var(--background-color)",
              position: "absolute",
              transform: "translateY(-54px)",
              marginTop: "6px",
              fontSize: "1.05rem",
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

  // Notes
  const noteElements = data.instruments[activeInstrument].measures.map(
    (notes, index) => {
      let lineCount = Math.floor(index / 2);
      let measureCount = index % 2; // 0 or 1 (0 is left, 1 is right)

      const fretElements = notes.map((note) => {
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
              backgroundColor: "var(--background-color)",
              position: "absolute",
              left: `${noteX}px`,
              top: `${noteY}px`,
            }}
          >
            {note.fret}
          </div>
        );
      });

      return <div key={nextId()}>{fretElements}</div>;
    }
  );

  const BASE_M_Y = 127;
  // Lines
  const measureElements = data.instruments[activeInstrument].measures.map(
    (measure, i) => {
      // There will be 2 positions for mx
      let mx = i % 2 === 0 ? 35 : 35 + width / 2;
      let my = BASE_M_Y + 125 * Math.floor(i / 2);

      return (
        <div key={nextId()}>
          {i % 2 === 0 ? <Lines tuning={data.tuning} top={my} /> : null}
          <div
            className="measure-line"
            style={{
              position: "absolute",
              top: my + 1 + "px",
              left: mx + "px",
              width: "3px",
              height: "90px",
            }}
          />
        </div>
      );
    }
  );

  return (
    <div className="chart-wrapper">
      {dataElements}
      {measureElements}
      {noteElements}
    </div>
  );
}
