import React, { useState } from "react";
import { PlayFill } from "react-bootstrap-icons";
import { test } from "../data/test";
import { song } from "../data/song";

import Chart from "./Chart";
import { noteData } from "../data/interfaces";

export default function TabPage() {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const [offset, setOffset] = useState(35);

  const a = song;

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
  let prevMeasure = 0;

  // Run through the notes

  const playTime = async () => {
    for (const measure of a.data) {
      for (let i = 0; i < 32; i++) {
        let startTime = Date.now();
        for (let j = 0; j < 32; j++) {
          if (measure[j] && measure[j].beatCount === i) {
            const n = getNote(measure[j].fret, measure[j].guitarString);
            play("src/assets/audio/" + n + ".wav");
          }
        }
        let finishTime = Date.now(); // Get elapsed time in case it takes a while, wait less time
        // Not sure why its * 3500, it should be 60 / bpm / 32 * 1000 to get ms but it's too quick for some reason
        // Each note is a 32nd note which is why there's the / 32
        // 60 seconds / bpm if my bpm is 120, then it gives me 0.5s per measure
        // 0.5s / 32 gives me about 0.016s per beat, or 16ms, but it makes it way too quick idk why

        await sleep((60 / a.bpm / 32) * 3500 - (finishTime - startTime));
      }
    }
  };

  return (
    <div>
      <div>{a.name}</div>
      <div>{a.bpm} BPM</div>
      <PlayFill onClick={playTime} cursor="pointer" />
      <div className="vertical-line" style={{ left: `${offset}px` }}></div>
      <Chart data={a} key={0} />
    </div>
  );
}
