import { useContext, useEffect, useRef, useState } from "react";
import nextId from "react-id-generator";
import { songType } from "../data/interfaces";
import oneSong from "../data/one";
import Lines from "./Lines";
import { HeightContext, InstrumentContext } from "./TabPage";

type Props = { data: songType; setPausePosition: any; setCurrentPosition: any };

export default function Chart({ data }: Props) {
  const MAX_PIXEL_WIDTH = 1500;
  const MAX_WIDTH = Math.min(window.innerWidth * 0.9, MAX_PIXEL_WIDTH);
  const [width, setWidth] = useState(Math.min(window.innerWidth, MAX_WIDTH));
  const activeInstrument = useContext(InstrumentContext)!;

  const [selectedNote, setSelectedNote] = useState({ measureIndex: -1, noteIndex: -1 });
  const topOffset = useContext(HeightContext)!;

  // This is temporary just to force a re-render when a note is changed`
  const [count, setCount] = useState(0);

  // Selected note ref
  const selectedNoteRef = useRef(selectedNote);
  selectedNoteRef.current = selectedNote;

  // Update the width when the window is resized with max width
  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.min(window.innerWidth * 0.9, MAX_PIXEL_WIDTH));
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("load", handleResize);
    window.addEventListener("onfullscreenchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      window.removeEventListener("load", handleResize);
      window.removeEventListener("onfullscreenchange", handleResize);
    };
  }, []);

  // Note properties for sizing and positioning
  const STRING_COUNT = data.tuning.length;
  const LINE_HEIGHT = 15;
  const BASE_X = 45;
  const BASE_Y = topOffset;
  const X_OFFSET = width / 64;
  const CENTER_OFFSET = (window.innerWidth - width) / 2;

  // Show the tuning
  const tuningElements = data.tuning.map((note, i) => {
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
              left: CENTER_OFFSET,
            }}
          >
            {note.length === 2 ? note[0] : `${note[0]}${note[1]}`}
          </span>
        </div>
        <br />
      </span>
    );
  });

  const handleNoteClick = (id: string, measureIndex: number, noteIndex: number) => {
    setSelectedNote({ measureIndex, noteIndex });
    selectedNoteRef.current = { measureIndex, noteIndex };

    const note = document.getElementById(id);
    if (note) note.className = "note selected";
  };

  // keyboard event listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { measureIndex, noteIndex } = selectedNoteRef.current;
      if (event.key === "Escape") setSelectedNote({ measureIndex: -1, noteIndex: -1 }); // Deselect note

      // change fret of note on keyboard input
      if (measureIndex !== -1 && noteIndex !== -1) {
        const note = data.measures[measureIndex][noteIndex];

        if (event.key === "ArrowUp") {
          event.preventDefault();
          if (event.shiftKey) note.guitarString--;
          else note.fret++;
        } else if (event.key === "ArrowDown") {
          event.preventDefault();

          if (event.shiftKey) note.guitarString++;
          else note.fret--;
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          note.beatCount--;
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          note.beatCount++;
        }

        // Force a re-render
        setCount((prevCount) => prevCount + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Notes
  const noteElements = data.measures.map((notes, index) => {
    let lineCount = Math.floor(index / 2);
    let measureCount = index % 2; // 0 or 1 (0 is left, 1 is right)

    const fretElements = notes.map((note, noteIndex) => {
      let noteX = BASE_X + X_OFFSET * note.beatCount + (width / 2) * measureCount + CENTER_OFFSET;

      // Need to add height of measure to each note
      let noteY =
        BASE_Y +
        (note.guitarString - 1.5) * LINE_HEIGHT +
        STRING_COUNT * LINE_HEIGHT * Math.floor(index / 2) +
        Math.floor(index / 2) * 20; // i * 10 is the margin

      // If the note is not the right instrument, don't show it
      return note.instrument === activeInstrument ? (
        <div
          id={note.id}
          className={`note ${
            selectedNote.measureIndex === index && selectedNote.noteIndex === noteIndex ? "selected" : ""
          }`}
          onClick={() => handleNoteClick(note.id, index, noteIndex)}
          key={nextId()}
          style={{
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
    // There will be 2 unique positions for mx
    let mx = i % 2 === 0 ? 35 : 35 + width / 2;
    let my = topOffset + STRING_COUNT * LINE_HEIGHT * Math.floor(i / 2) + Math.floor(i / 2) * 20; // i * 10 is the margin

    return (
      <div key={nextId()}>
        {i % 2 === 0 ? (
          <Lines tuning={data.tuning} top={my} lineHeight={LINE_HEIGHT} maxWidth={MAX_WIDTH} width={width} />
        ) : null}
        <div
          className="measure-line"
          style={{
            position: "absolute",
            top: my + 1 + "px",
            left: mx + CENTER_OFFSET + "px",
            width: "3px",
            height: `${(STRING_COUNT - 1) * LINE_HEIGHT}px`,
          }}
        />
      </div>
    );
  });

  return (
    <div className="chart-wrapper">
      {tuningElements}
      {measureElements}
      {noteElements}
    </div>
  );
}
