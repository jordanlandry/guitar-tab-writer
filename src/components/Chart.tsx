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

  const KEYBINDS: any = {
    Space: () => play(getNote(), activeInstrument),
    Escape: () => setSelectedNote({ measureIndex: -1, noteIndex: -1 }),
    ArrowUp: (note: any) => note.fret++,
    ArrowDown: (note: any) => (note.fret = Math.max(0, note.fret - 1)),
    ArrowLeft: (note: any) => (note.beatCount = Math.max(0, note.beatCount - 1)),
    ArrowRight: (note: any) => (note.beatCount = Math.min(32, note.beatCount + 1)), // 32 is the current max beat count will change to be dynamic
  };

  const SHIFT_KEYBINDS: any = {
    ArrowUp: (note: any) => (note.guitarString = Math.max(1, note.guitarString - 1)),
    ArrowDown: (note: any) => (note.guitarString = Math.min(data.tuning.length, note.guitarString + 1)),
  };

  const CTRL_KEYBINDS: any = {
    ArrowLeft: (note: any) => {
      // Go to previous note
      // Find note with most previous beatcount
      for (let i = 1; i < 32; i++) {
        const note = data.measures[selectedNoteRef.current.measureIndex].find((note: any) => {
          return (
            note.beatCount ===
              data.measures[selectedNoteRef.current.measureIndex][selectedNoteRef.current.noteIndex].beatCount - i &&
            note.instrument === activeInstrument
          );
        });

        if (note) {
          setSelectedNote({
            measureIndex: selectedNoteRef.current.measureIndex,
            noteIndex: data.measures[selectedNoteRef.current.measureIndex].indexOf(note),
          });

          selectedNoteRef.current = {
            measureIndex: selectedNoteRef.current.measureIndex,
            noteIndex: data.measures[selectedNoteRef.current.measureIndex].indexOf(note),
          };

          break;
        }

        // If we are at the first note in the measure go to the last note in the previous measure
        else if (i === 31) {
          // If we are at the end of the measure go to the next measure
          const prevMeasure = data.measures[selectedNoteRef.current.measureIndex - 1];
          if (prevMeasure) {
            const reversed = prevMeasure.slice().reverse(); // Reverse the array so we can find the last note
            const note = reversed.find((note: any) => note.instrument === activeInstrument);
            if (note) {
              setSelectedNote({
                measureIndex: selectedNoteRef.current.measureIndex - 1,
                noteIndex: prevMeasure.indexOf(note),
              });

              selectedNoteRef.current = {
                measureIndex: selectedNoteRef.current.measureIndex - 1,
                noteIndex: prevMeasure.indexOf(note),
              };
            }
          }
        }
      }
    },

    ArrowRight: (note: any) => {
      // Go to next note
      // Find note with most previous beatcount
      for (let i = 1; i < 32; i++) {
        const note = data.measures[selectedNoteRef.current.measureIndex].find((note: any) => {
          return (
            note.beatCount ===
              data.measures[selectedNoteRef.current.measureIndex][selectedNoteRef.current.noteIndex].beatCount + i &&
            note.instrument === activeInstrument
          );
        });
        if (note) {
          setSelectedNote({
            measureIndex: selectedNoteRef.current.measureIndex,
            noteIndex: data.measures[selectedNoteRef.current.measureIndex].indexOf(note),
          });

          selectedNoteRef.current = {
            measureIndex: selectedNoteRef.current.measureIndex,
            noteIndex: data.measures[selectedNoteRef.current.measureIndex].indexOf(note),
          };
          break;
        } else if (i === 31) {
          // If we are at the end of the measure go to the next measure
          const nextMeasure = data.measures[selectedNoteRef.current.measureIndex + 1];
          if (nextMeasure) {
            const note = nextMeasure.find((note: any) => note.instrument === activeInstrument);
            if (note) {
              setSelectedNote({
                measureIndex: selectedNoteRef.current.measureIndex + 1,
                noteIndex: nextMeasure.indexOf(note),
              });

              selectedNoteRef.current = {
                measureIndex: selectedNoteRef.current.measureIndex + 1,
                noteIndex: nextMeasure.indexOf(note),
              };
            }
          }
        }
      }
    },
  };

  // keyboard event listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { measureIndex, noteIndex } = selectedNoteRef.current;
      if (event.key === "Escape") setSelectedNote({ measureIndex: -1, noteIndex: -1 }); // Deselect note

      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        event.stopPropagation();
      }

      // Change fret of note on keyboard input
      if (measureIndex !== -1 && noteIndex !== -1) {
        const note = data.measures[measureIndex][noteIndex];

        if (event.shiftKey && SHIFT_KEYBINDS[event.key]) SHIFT_KEYBINDS[event.key](note);
        else if (event.ctrlKey && CTRL_KEYBINDS[event.key]) CTRL_KEYBINDS[event.key](note);
        else if (KEYBINDS[event.key]) KEYBINDS[event.key](note);

        // Play the note if user changed note
        if (
          event.key === "ArrowUp" ||
          event.key === "ArrowDown" ||
          (event.key === "ArrowLeft" && event.ctrlKey) ||
          (event.key === "ArrowRight" && event.ctrlKey)
        )
          console.log(selectedNoteRef.current);

        const { guitarString, fret } =
          data.measures[selectedNoteRef.current.measureIndex][selectedNoteRef.current.noteIndex];

        play(getNote(fret, guitarString), activeInstrument);

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

  const lineElements = data.measures.map((measure, i) => (
    <Line key={nextId()} tuning={data.tuning} lineHeight={LINE_HEIGHT} maxWidth={width} />
  ));

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
