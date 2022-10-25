import React, { useState } from "react";
import { PlayFill } from "react-bootstrap-icons";
import { test } from "../data/test";
import sound from "../assets/audio/test.wav";

// import g2 from "../assets/audio/g2.wav";
// import g3 from "../assets/audio/g3.wav";
// import g4 from "../assets/audio/g4.wav";
// import b3 from "../assets/audio/b3.wav";
// import d2 from "../assets/audio/d3.wav";
// import b2 from "../assets/audio/b2.wav";

import Chart from "./Chart";
import { noteData } from "../data/interfaces";

export default function TabPage() {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const [offset, setOffset] = useState(35);

  const a = test;

  const play = (a: any) => {
    const audio = new Audio();
    audio.src = a;

    new Audio(a).play();
  };

  const notes = [
    "ab",
    "a",
    "bb",
    "b",
    "c",
    "db",
    "d",
    "eb",
    "e",
    "f",
    "gb",
    "g",
  ];
  const getNote = (fret: number, guitarString: number): string => {
    // Get notes index of initial string note, add the stringNumber value,
    // and get the remainder of it and the number of notes to get the note index,
    // floor divide it to get the octave

    let n = a.tuning[guitarString - 1][0];
    // let o = tuning[guitarString - 1][1];

    let o = "";
    if (n.length === 3) {
      n += a.tuning[guitarString - 1][1];
      o = a.tuning[guitarString - 1][2];
    } else o = a.tuning[guitarString - 1][1];

    let i = notes.indexOf(n) + fret;
    o = parseInt(o) + Math.floor(i / notes.length) + ""; // Get octave

    return notes[i % notes.length] + o;
  };

  let prevBeat = 0;
  // Run through the notes
  const playTime = async () => {
    a.data.forEach(async (note: noteData) => {
      if (note.beatCount > prevBeat) {
        // Run through the beats
        for (let i = prevBeat; i < note.beatCount; i++) {
          if (i === note.beatCount - 1) {
            let n = getNote(note.fret, note.guitarString);
            play("src/assets/audio/" + n + ".wav");
          }
          setOffset((prev) => offset + 5);
          await sleep((60 / a.bpm / 32) * 1000);
        }
      }
    });
  };

  return (
    <div>
      <div>{a.name}</div>
      <div>{a.bpm} BPM</div>
      <PlayFill onClick={playTime} cursor="pointer" />
      <div className="vertical-line" style={{ left: `${offset}px` }}></div>
      <Chart data={a} />
    </div>
  );
}
