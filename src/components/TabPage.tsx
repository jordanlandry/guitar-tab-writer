import { createContext, useEffect, useRef, useState } from "react";
import { PauseFill, PlayFill } from "react-bootstrap-icons";
import blankSong from "../data/blankSong";

import mySong from "../data/my_song";
import oneSong from "../data/one";
import { test } from "../data/test";
import users from "../data/users";
import { useLocalStorage } from "../hooks/useLocalStorage";
import ChangeableText from "./ChangeableText";
import Chart from "./Chart";
import TopPane from "./TopPane";

export const InstrumentContext = createContext<null | number>(null);
export const HeightContext = createContext<null | number>(null);

type Props = { setActivePage: any };
export default function TabPage({ setActivePage }: Props) {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const [user, setUser] = useLocalStorage("user", 0);
  const [songIndex, setSongIndex] = useLocalStorage("songIndex", 0);
  const [speed, setSpeed] = useState(1); // Number between 0 and 1 (0.5 is half speed)
  const [volume, setVolume] = useState(1); // Number between 0 and 1 (0.5 is half volume)
  const [playing, setPlaying] = useState(false);

  const [pausePosition, setPausePosition] = useState({ measure: 0, beat: 0 });
  const [currentPosition, setCurrentPosition] = useState({ measure: 0, beat: 0 });
  const [activeInstrument, setActiveInstrument] = useState(0);
  const [counter, setCounter] = useState(0);

  const [height, setHeight] = useState(0);
  const heightRef = useRef<any>(null);

  useEffect(() => {
    setHeight(heightRef.current?.clientHeight || 0);
  });

  const currentSong = songIndex === -1 ? blankSong : users[user].songs[songIndex];
  if (songIndex === -1) {
    users[user].songs.push(blankSong);
    setSongIndex(users[user].songs.length - 1);
  }

  const [songName, setSongName] = useState(currentSong.name);
  const [songArtist, setSongArtist] = useState(currentSong.artist);
  const [songBPM, setSongBPM] = useState(currentSong.bpm);

  // Refs
  const playingRef = useRef(playing);
  playingRef.current = playing;

  const speedRef = useRef(speed);
  speedRef.current = speed;

  const volumeRef = useRef(volume);
  volumeRef.current = volume;

  const activeInstrumentRef = useRef(activeInstrument);
  activeInstrumentRef.current = activeInstrument;

  const pausePositionRef = useRef(pausePosition);
  pausePositionRef.current = pausePosition;

  const currentPositionRef = useRef(currentPosition);
  currentPositionRef.current = currentPosition;

  // Constants
  const BEATS_PER_MEASURE = 32;
  const AUDIO_BASE_PATH = "src/assets/audio/";
  const AUDIO_FILE_EXTENSION = ".wav";

  // Play functions
  const play = (note: string, instrumentIndex: number) => {
    const audio = new Audio();
    audio.src = AUDIO_BASE_PATH + currentSong.instruments[instrumentIndex].sound + note + AUDIO_FILE_EXTENSION;

    if (instrumentIndex === activeInstrumentRef.current) audio.volume = volumeRef.current * 1;
    else audio.volume = volumeRef.current * 0.75;
    if (audio.src) audio.play();
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

  const handlePause = () => {
    setPlaying(false);
    setPausePosition({ measure: currentPositionRef.current.measure, beat: currentPositionRef.current.beat });
  };

  const playSong = async () => {
    if (playingRef.current) return; // Don't play if already playing

    setPlaying(true);
    playingRef.current = true;

    // Go through each measure
    let startMeasure = pausePositionRef.current.measure ? pausePositionRef.current.measure : 0;
    for (let m = startMeasure; m < currentSong.measures.length; m++) {
      const measure = currentSong.measures[m];

      let startBeat = pausePositionRef.current.beat ? pausePositionRef.current.beat : 0;
      // Go through each beat
      for (let i = startBeat; i < BEATS_PER_MEASURE; i++) {
        let startTime = Date.now();

        // Find the correct note
        for (let j = 0; j < measure.length; j++) {
          //@ts-ignore
          if (measure[j] && measure[j].beatCount === i) {
            if (!playingRef.current) return; // Stop playing if playing is false

            // Reset the pause position so it doesn't start from the pause position next time
            setPausePosition({ measure: 0, beat: 0 });

            // Update current position
            setCurrentPosition({ measure: m, beat: i });

            //@ts-ignore
            const note = getNote(measure[j].fret, measure[j].guitarString);
            //@ts-ignore
            let k = measure[j].instrument;
            play(note, k);
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

  const handleNewMeasure = () => {
    const newSong = { ...currentSong };
    newSong.measures.push([]);
    // Force re-render
    setCounter((prev) => prev + 1);
  };

  const updateSongName = (newName: string) => {
    users[user].songs[songIndex].name = newName;
    setSongName(newName);
  };

  const updateSongArtist = (newArtist: string) => {
    users[user].songs[songIndex].artist = newArtist;
    setSongArtist(newArtist);
  };

  return (
    <div className="tab-page">
      <button onClick={() => setActivePage(0)}>Select Song</button>
      <div ref={heightRef}>
        <TopPane
          songName={songName}
          setSongName={updateSongName}
          songArtist={songArtist}
          setSongArtist={updateSongArtist}
          playingRef={playingRef}
          playSong={playSong}
          handlePause={handlePause}
          speed={speed}
          updateSpeed={updateSpeed}
          volume={volume}
          updateVolume={updateVolume}
          setActiveInstrument={setActiveInstrument}
          currentSong={currentSong}
        />
      </div>

      <HeightContext.Provider value={height}>
        <InstrumentContext.Provider value={activeInstrument}>
          <Chart
            play={play}
            getNote={getNote}
            data={currentSong}
            key={0}
            setPausePosition={setPausePosition}
            setCurrentPosition={setCurrentPosition}
          />
        </InstrumentContext.Provider>
      </HeightContext.Provider>

      <button className="new-button" onClick={handleNewMeasure}>
        +
      </button>
    </div>
  );
}
