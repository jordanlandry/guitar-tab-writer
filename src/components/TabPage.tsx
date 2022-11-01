import { createContext, useEffect, useRef, useState } from "react";
import { PauseFill, PlayFill } from "react-bootstrap-icons";

import mySong from "../data/my_song";
import { test } from "../data/test";
import Chart from "./Chart";

export const InstrumentContext = createContext<null | number>(null);
export const HeightContext = createContext<null | number>(null);
export default function TabPage() {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const [currentSong, setCurrentSong] = useState(mySong);
  const [speed, setSpeed] = useState(1); // Number between 0 and 1 (0.5 is half speed)
  const [volume, setVolume] = useState(1); // Number between 0 and 1 (0.5 is half volume)
  const [playing, setPlaying] = useState(false);

  const [activeInstrument, setActiveInstrument] = useState(0);

  const [height, setHeight] = useState(0);
  const heightRef = useRef<any>(null);

  useEffect(() => {
    setHeight(heightRef.current?.clientHeight || 0);
  });

  // Refs
  const playingRef = useRef(playing);
  playingRef.current = playing;

  const speedRef = useRef(speed);
  speedRef.current = speed;

  const volumeRef = useRef(volume);
  volumeRef.current = volume;

  const activeInstrumentRef = useRef(activeInstrument);
  activeInstrumentRef.current = activeInstrument;

  const play = (a: string, instrumentIndex: number) => {
    const audio = new Audio();
    audio.src = a;
    audio.volume = volumeRef.current * instrumentIndex === activeInstrumentRef.current ? 1 : 0.75; // If the instrument is active, play at full volume. Otherwise, play at 75% volume
    audio.play();
  };

  const NOTE_VALUES = ["ab", "a", "bb", "b", "c", "db", "d", "eb", "e", "f", "gb", "g"];

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
  const AUDIO_BASE_PATH = "src/assets/audio/";

  const playSong = async () => {
    if (playingRef.current) return; // Don't play if already playing

    setPlaying(true);
    playingRef.current = true;

    // Go through each measure
    for (const measure of currentSong.measures) {
      // Find the correct note and play it
      for (let i = 0; i < measure.length; i++) {
        let startTime = Date.now();
        for (let j = 0; j < measure.length; j++) {
          if (measure[j] && measure[j].beatCount === i) {
            if (!playingRef.current) return; // Stop playing if playing is false

            const note = getNote(measure[j].fret, measure[j].guitarString);
            let k = measure[j].instrument;
            play(AUDIO_BASE_PATH + currentSong.instruments[k].sound + "/" + note + ".wav", k);
          }
        }
        let finishTime = Date.now();

        await sleep(((60 / currentSong.bpm / BEATS_PER_MEASURE) * 4000) / speedRef.current - (finishTime - startTime));
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

  // Elements
  const instrumentDropdown = currentSong.instruments.map((instrument) => {
    return (
      <option value={instrument.name} key={instrument.name}>
        {instrument.name}
      </option>
    );
  });

  return (
    <div className="tab-page" ref={heightRef}>
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
          <button onClick={playSong} className="play-btn">
            <PlayFill />
          </button>
        )}
        <br />
        <div className="speed-wrapper">
          <input type="range" onChange={updateSpeed} value={speed} max={1} min={0.01} step={0.01} />
          <span>{Math.floor(speed * 100)}% Speed</span>
        </div>
        <br />
        <div className="volume-wrapper">
          <input type="range" onChange={updateVolume} value={volume} max={1} min={0} step={0.01} />
          <span>{Math.floor(volume * 100)}% Volume</span>
        </div>

        <select
          className="instrument-dropdown"
          onChange={(e) => {
            setActiveInstrument(e.target.selectedIndex);
          }}
        >
          {instrumentDropdown}
        </select>
      </div>
      <HeightContext.Provider value={height}>
        <InstrumentContext.Provider value={activeInstrument}>
          <Chart data={currentSong} key={0} />
        </InstrumentContext.Provider>
      </HeightContext.Provider>
    </div>
  );
}
