import { songType } from "./interfaces";

const mySong: songType = {
  name: "My Song",
  artist: "Me",
  bpm: 50,
  tuning: ["e4", "b4", "g3", "d3", "a3", "e2"], // From high e to low e

  instruments: [
    {
      name: "Acoustic Lead",
      measures: [
        [
          { guitarString: 5, fret: 15, beatCount: 0, type: "normal" },
          { guitarString: 4, fret: 13, beatCount: 1, type: "normal" },
          { guitarString: 3, fret: 12, beatCount: 2, type: "normal" },
          { guitarString: 2, fret: 13, beatCount: 3, type: "normal" },
          { guitarString: 1, fret: 11, beatCount: 4, type: "normal" },
          { guitarString: 1, fret: 15, beatCount: 5, type: "normal" },
          { guitarString: 1, fret: 20, beatCount: 6, type: "normal" },
          { guitarString: 1, fret: 15, beatCount: 7, type: "normal" },
          { guitarString: 1, fret: 11, beatCount: 8, type: "normal" },
          { guitarString: 2, fret: 13, beatCount: 9, type: "normal" },
          { guitarString: 3, fret: 12, beatCount: 10, type: "normal" },
          { guitarString: 4, fret: 13, beatCount: 11, type: "normal" },
          { guitarString: 5, fret: 15, beatCount: 12, type: "normal" },
        ],
      ],
    },
    {
      name: "Acoustic Rhythm",
      measures: [
        [
          { guitarString: 1, fret: 3, beatCount: 0, type: "normal" },
          { guitarString: 2, fret: 4, beatCount: 0, type: "normal" },
          { guitarString: 3, fret: 5, beatCount: 0, type: "normal" },
          { guitarString: 4, fret: 5, beatCount: 0, type: "normal" },
          { guitarString: 5, fret: 3, beatCount: 0, type: "normal" },
        ],
      ],
    },
  ],
};

export default mySong;
