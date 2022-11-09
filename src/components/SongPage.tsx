import React from "react";
import mySong from "../data/my_song";
import oneSong from "../data/one";
import { song2 } from "../data/song1";
import { stairway } from "../data/stairway";
import users from "../data/users";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Props = { setActivePage: any };

export default function SongPage({ setActivePage }: Props) {
  const [user, setUser] = useLocalStorage("user", 0);
  const [songIndex, setSongIndex] = useLocalStorage("songIndex", 0);

  const handleClickSong = (index: number) => {
    setSongIndex(index);
    setActivePage(1);
  };

  return (
    <div>
      <button onClick={() => handleClickSong(-1)}>Create Song</button>
      {users[user].songs.map((song, i) => {
        return (
          <div key={i}>
            <button onClick={() => handleClickSong(i)}>{song.name}</button>
          </div>
        );
      })}
    </div>
  );
}
