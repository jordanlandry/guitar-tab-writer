import { songType } from "./interfaces";

const mySong: songType = {
  name: "My Song",
  artist: "Me",
  bpm: 50,
  tuning: ["e2", "a3", "d3", "g3", "b4", "e4"],

  instruments: [
    {
      name: "Guitar",
      measures: [
        [
          { guitarString: 2, fret: 15, beatCount: 0, type: "normal" },
          { guitarString: 3, fret: 13, beatCount: 1, type: "normal" },
          { guitarString: 4, fret: 12, beatCount: 2, type: "normal" },
          { guitarString: 5, fret: 13, beatCount: 3, type: "normal" },
          { guitarString: 6, fret: 11, beatCount: 4, type: "normal" },
          { guitarString: 6, fret: 15, beatCount: 5, type: "normal" },
          { guitarString: 6, fret: 20, beatCount: 6, type: "normal" },
          { guitarString: 6, fret: 15, beatCount: 7, type: "normal" },
          { guitarString: 6, fret: 11, beatCount: 8, type: "normal" },
          { guitarString: 5, fret: 13, beatCount: 9, type: "normal" },
          { guitarString: 4, fret: 12, beatCount: 10, type: "normal" },
          { guitarString: 3, fret: 13, beatCount: 11, type: "normal" },
          { guitarString: 2, fret: 15, beatCount: 12, type: "normal" },
        ],
      ],
    },
  ],
};
export default mySong;
