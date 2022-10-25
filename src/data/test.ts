import { songType } from "./interfaces";

export const test: songType = {
  name: "G Chord",
  bpm: 100,

  // Should play a G chord
  data: [
    { guitarString: 6, fret: 3, beatCount: 1, type: "normal" },
    { guitarString: 5, fret: 0, beatCount: 1, type: "normal" },
    { guitarString: 4, fret: 0, beatCount: 1, type: "normal" },
    { guitarString: 3, fret: 0, beatCount: 1, type: "normal" },
    { guitarString: 2, fret: 2, beatCount: 1, type: "normal" },
    { guitarString: 1, fret: 3, beatCount: 1, type: "normal" },
  ],
};
