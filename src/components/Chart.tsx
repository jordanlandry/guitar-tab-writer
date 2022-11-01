import { useContext, useEffect, useState } from "react";
import nextId from "react-id-generator";
import { songType } from "../data/interfaces";
import Lines from "./Lines";
import { HeightContext, InstrumentContext } from "./TabPage";

type Props = { data: songType };

export default function Chart({ data }: Props) {
  const [width, setWidth] = useState(window.innerWidth);
  const activeInstrument = useContext(InstrumentContext)!;

  const topOffset = useContext(HeightContext)!;

  // Update the width when the window is resized
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Note properties for sizing and positioning
  const STRING_COUNT = data.tuning.length;
  const LINE_HEIGHT = 15;
  const BASE_X = 45;
  const BASE_Y = topOffset;
  const X_OFFSET = width / 64;

  // Show the tuning
  const dataElements = data.tuning.map((note, i) => {
    return (
      <span key={nextId()}>
        <div className="uppercase">
          {/* Tuning */}
          <span
            style={{
              backgroundColor: "var(--background-color)",
              position: "absolute",
              top: BASE_Y + LINE_HEIGHT * (i - 0.5) + "px",
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
  const noteElements = data.measures.map((notes, index) => {
    let lineCount = Math.floor(index / 2);
    let measureCount = index % 2; // 0 or 1 (0 is left, 1 is right)

    const fretElements = notes.map((note) => {
      let noteX = BASE_X + X_OFFSET * note.beatCount + (width / 2) * measureCount;

      // Need to add height of measure to each note
      let noteY =
        BASE_Y +
        (note.guitarString - 1.5) * LINE_HEIGHT +
        STRING_COUNT * LINE_HEIGHT * Math.floor(index / 2) +
        Math.floor(index / 2) * 20; // i * 10 is the margin

      // If the note is not the right instrument, don't show it
      return note.instrument === activeInstrument ? (
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
      ) : null;
    });

    return <div key={nextId()}>{fretElements}</div>;
  });

  // Lines
  const measureElements = data.measures.map((measure, i) => {
    // There will be 2 positions for mx
    let mx = i % 2 === 0 ? 35 : 35 + width / 2;
    let my = topOffset + STRING_COUNT * LINE_HEIGHT * Math.floor(i / 2) + Math.floor(i / 2) * 20; // i * 10 is the margin

    return (
      <div key={nextId()}>
        {i % 2 === 0 ? <Lines tuning={data.tuning} top={my} lineHeight={LINE_HEIGHT} /> : null}
        <div
          className="measure-line"
          style={{
            position: "absolute",
            top: my + 1 + "px",
            left: mx + "px",
            width: "3px",
            height: `${(STRING_COUNT - 1) * LINE_HEIGHT}px`,
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
