import React from "react";
import mySong from "../data/my_song";
import oneSong from "../data/one";
import { song2 } from "../data/song1";
import { stairway } from "../data/stairway";

type Props = { setActivePage: any };

export default function SongPage({ setActivePage }: Props) {
  const songs = [oneSong, mySong, stairway, song2];

  return (
    <div>
      <button onClick={() => setActivePage(1)}>Create Song</button>
      {songs.map((song, i) => {
        return (
          <div key={i}>
            <button onClick={() => setActivePage(1)}>{song.name}</button>
          </div>
        );
      })}
    </div>
  );
}
