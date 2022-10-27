import React, { createContext, useContext, useState } from "react";
import { PauseFill, PlayFill } from "react-bootstrap-icons";
import { test } from "../data/test";
import { song } from "../data/song";

import Chart from "./Chart";
import { noteData } from "../data/interfaces";
import { song1 } from "../data/song1";

export const SpeedContext = createContext<null | number>(null);
export default function TabPage() {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const [offset, setOffset] = useState(35);
  const [currentSong, setCurrentSong] = useState(song);
  const [speed, setSpeed] = useState(1); // Number between 0 and 1 (0.5 is half speed)

  const [playing, setPlaying] = useState(true);

  const play = (a: any) => {
    const audio = new Audio();
    audio.src = a;
    new Audio(a).play();
  };

  const NOTE_VALUES = [
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

    let n = currentSong.tuning[guitarString - 1][0];
    let o = "";

    // Don't show octave but show if it's a sharp or flat
    if (n.length === 3) {
      n += currentSong.tuning[guitarString - 1][1];
      o = currentSong.tuning[guitarString - 1][2];
    } else o = currentSong.tuning[guitarString - 1][1];

    let i = NOTE_VALUES.indexOf(n) + fret;
    o = parseInt(o) + Math.floor(i / NOTE_VALUES.length) + ""; // Get octave

    return NOTE_VALUES[i % NOTE_VALUES.length] + o;
  };

  let prevBeat = 0;
  let prevMeasure = 0;

  // Run through the notes
  const playTime = async () => {
    for (const measure of currentSong.data) {
      for (let i = 0; i < 32; i++) {
        let startTime = Date.now();
        for (let j = 0; j < 32; j++) {
          if (measure[j] && measure[j].beatCount === i) {
            const n = getNote(measure[j].fret, measure[j].guitarString);
            play("src/assets/audio/" + n + ".wav");
          }
        }
        let finishTime = Date.now(); // Get elapsed time in case it takes a while, wait less time

        await sleep(
          ((60 / currentSong.bpm / 32) * 4000 * 1) / speed -
            (finishTime - startTime)
        );
      }
    }

    setPlaying(false);
  };

  const updateSpeed = (e: any) => {
    setSpeed(e.target.value);
  };

  const handlePlayClick = () => {
    playTime();
  };

  return (
    <div>
      <SpeedContext.Provider value={speed}>
        <div>{currentSong.name}</div>
        <div>{currentSong.bpm} BPM</div>

        <PlayFill onClick={handlePlayClick} cursor="pointer" />
        {/* <div
          className="vertical-line"
          style={{ left: `${offset}px`, top: "53px" }}
        ></div> */}

        <input
          type="range"
          onChange={updateSpeed}
          value={speed}
          max={1}
          min={0.01}
          step={0.01}
        />
        <span>{Math.floor(speed * 100)}%</span>

        <Chart data={currentSong} key={0} />
      </SpeedContext.Provider>
    </div>
  );
}
