import React from "react";
import { PauseFill, PlayFill } from "react-bootstrap-icons";
import { songType } from "../data/interfaces";
import ChangeableText from "./ChangeableText";

type Props = {
  songName: string;
  setSongName: any;
  songArtist: string;
  setSongArtist: any;
  handlePause: any;
  currentSong: songType;
  playingRef: any;
  playSong: any;
  updateSpeed: any;
  speed: number;
  volume: number;
  updateVolume: any;
  setActiveInstrument: any;
};

export default function TopPane({
  songName,
  setSongName,
  songArtist,
  setSongArtist,
  handlePause,
  currentSong,
  playingRef,
  playSong,
  updateSpeed,
  speed,
  volume,
  updateVolume,
  setActiveInstrument,
}: Props) {
  return (
    <div className="tab-page--header">
      <div className="tab-page--top">
        <div className="tab-page--name">
          <ChangeableText value={songName} setValue={setSongName} />
        </div>
        <div className="tab-page--artist">
          <ChangeableText value={songArtist} setValue={setSongArtist} />
        </div>

        <div>{currentSong.bpm} BPM</div>
      </div>
      {playingRef.current ? (
        <button onClick={handlePause} className="play-btn">
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
        {currentSong.instruments.map((instrument) => {
          return (
            <option value={instrument.name} key={instrument.name}>
              {instrument.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
