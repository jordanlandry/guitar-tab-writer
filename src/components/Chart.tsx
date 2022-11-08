import { useContext, useEffect, useRef, useState } from "react";
import nextId from "react-id-generator";
import { songType } from "../data/interfaces";
import oneSong from "../data/one";
import Line from "./Line";
import { HeightContext, InstrumentContext } from "./TabPage";

type Props = { data: songType; setPausePosition: any; setCurrentPosition: any; play: any; getNote: any };

export default function Chart({ data, setPausePosition, setCurrentPosition, play, getNote }: Props) {
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
          else note.fret = Math.max(0, note.fret - 1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          note.beatCount = Math.max(0, note.beatCount - 1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          note.beatCount++;
        }

        // Play the note if the user presses space
        if (event.key === "Enter") {
          const newNote = getNote(note.fret, note.guitarString);
          if (newNote) play(newNote, note.instrument);
        }

        // Play the new note if the user updated the fret or string
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
          const newNote = getNote(note.fret, note.guitarString);
          if (newNote) play(newNote, note.instrument);
        }

        // Force a re-render
        setCount((prevCount) => prevCount + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Note properties for sizing and positioning
  const STRING_COUNT = data.tuning.length;
  const LINE_HEIGHT = 15;
  const BASE_X = 45;
  const BASE_Y = topOffset + 13;
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
              top: BASE_Y + LINE_HEIGHT * i + "px",
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

  const lineElements = data.measures.map((measure, i) => {
    // Need a left and a right
    return <Line key={nextId()} tuning={data.tuning} lineHeight={LINE_HEIGHT} maxWidth={width} />;
  });

  return (
    <div className="chart-wrapper">
      {/* {tuningElements} */}
      <div className="line-grid" style={{ maxWidth: MAX_WIDTH, margin: "auto" }}>
        {lineElements}
      </div>
      {noteElements}
    </div>
  );
}
