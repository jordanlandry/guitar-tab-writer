import React, { createContext, useContext, useRef, useState } from "react";
import { PauseFill, PlayFill } from "react-bootstrap-icons";
import { test } from "../data/test";
import { song } from "../data/song";

import Chart from "./Chart";
import { noteData } from "../data/interfaces";
import { stairway } from "../data/stairway";
import mySong from "../data/my_song";

export const SpeedContext = createContext<null | number>(null);
export default function TabPage() {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const [currentSong, setCurrentSong] = useState(mySong);
  const [speed, setSpeed] = useState(1); // Number between 0 and 1 (0.5 is half speed)
  const [volume, setVolume] = useState(1); // Number between 0 and 1 (0.5 is half volume)
  const [playing, setPlaying] = useState(false);

  // Refs
  const playingRef = useRef(playing);
  playingRef.current = playing;

  const speedRef = useRef(speed);
  speedRef.current = speed;

  const volumeRef = useRef(volume);
  volumeRef.current = volume;

  const play = (a: any) => {
    const audio = new Audio();
    audio.src = a;
    audio.volume = volumeRef.current;
    audio.play();
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

  const BEATS_PER_MEASURE = 32;

  // Run through the notes
  const playTime = async () => {
    for (const measure of currentSong.data) {
      for (let i = 0; i < BEATS_PER_MEASURE; i++) {
        let startTime = Date.now();

        // Find the notes that are on this beat
        for (let j = 0; j < BEATS_PER_MEASURE; j++) {
          if (!playingRef.current) return; // Return here so it fully stops

          if (measure[j] && measure[j].beatCount === i) {
            // Play the note
            const n = getNote(measure[j].fret, measure[j].guitarString);
            play("src/assets/audio/" + n + ".wav");
          }
        }
        let finishTime = Date.now(); // Get elapsed time in case it takes a while, wait less time

        // Wait until the next beat
        await sleep(
          ((60 / currentSong.bpm / 32) * 4000 * 1) / speedRef.current -
            (finishTime - startTime)
        );
      }
    }
    setPlaying(false);
  };

  const updateSpeed = (e: any) => {
    setSpeed(e.target.value);
  };

  const updateVolume = (e: any) => {
    setVolume(e.target.value);
  };

  const playClick = () => {
    setPlaying(true);
  };

  if (playing) playTime();

  return (
    <div className="tab-page">
      <div className="tab-page--header">
        <div className="tab-page--top">
          <div className="tab-page--name">{currentSong.name}</div>
          <div className="tab-page--artist">{currentSong.artist}</div>
          <div>{currentSong.bpm} BPM</div>
        </div>
        {playingRef.current ? (
          <button onClick={() => setPlaying(false)} className="play-btn">
            <PauseFill />
          </button>
        ) : (
          <button onClick={playClick} className="play-btn">
            <PlayFill />
          </button>
        )}

        <br />
        <div className="speed-wrapper">
          <input
            type="range"
            onChange={updateSpeed}
            value={speed}
            max={1}
            min={0.01}
            step={0.01}
          />
          <span>{Math.floor(speed * 100)}% Speed</span>
        </div>
        <br />
        <div className="volume-wrapper">
          <input
            type="range"
            onChange={updateVolume}
            value={volume}
            max={1}
            min={0}
            step={0.01}
          />
          <span>{Math.floor(volume * 100)}% Volume</span>
        </div>
      </div>

      <SpeedContext.Provider value={speed}>
        <Chart data={currentSong} key={0} />
      </SpeedContext.Provider>
    </div>
  );
}
