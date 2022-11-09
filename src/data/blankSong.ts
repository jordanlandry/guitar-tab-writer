import nextId from "react-id-generator";

const blankSong = {
  name: "My Song",
  artist: "Me",
  bpm: 120,
  tuning: ["e4", "b4", "g3", "d3", "a3", "e2"], // From high e to low e

  instruments: [
    {
      name: "Acoustic Lead",
      index: 0,
      sound: "", // Blank for now until we add more sounds, blank will use the default guitar sound
    },
  ],
  measures: [[]],
};
export default blankSong;
