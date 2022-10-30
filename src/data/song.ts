import { songType } from "./interfaces";

export const song: songType = {
  name: "Never too late",
  artist: "Three Days Grace",
  bpm: 154,

  tuning: ["d2", "a3", "d3", "g3", "b4", "e4"],

  // Should play a G chord

  // This isn't how you will write tabs, this is just how it will be stored and read
  data: [
    [
      { guitarString: 1, fret: 8, beatCount: 0, type: "normal" },
      { guitarString: 2, fret: 8, beatCount: 8, type: "normal" },
      { guitarString: 3, fret: 10, beatCount: 12, type: "normal" },
      { guitarString: 2, fret: 8, beatCount: 20, type: "normal" },
      { guitarString: 1, fret: 0, beatCount: 24, type: "normal" },
    ],
    [
      { guitarString: 2, fret: 0, beatCount: 4, type: "normal" },
      { guitarString: 3, fret: 10, beatCount: 8, type: "normal" },
      { guitarString: 3, fret: 8, beatCount: 16, type: "normal" },
      { guitarString: 3, fret: 7, beatCount: 24, type: "normal" },
      { guitarString: 2, fret: 8, beatCount: 28, type: "normal" },
    ],
    [
      { guitarString: 1, fret: 8, beatCount: 0, type: "normal" },
      { guitarString: 2, fret: 8, beatCount: 8, type: "normal" },
      { guitarString: 3, fret: 10, beatCount: 12, type: "normal" },
      { guitarString: 2, fret: 8, beatCount: 20, type: "normal" },
      { guitarString: 1, fret: 0, beatCount: 24, type: "normal" },
    ],
    [
      { guitarString: 2, fret: 0, beatCount: 4, type: "normal" },
      { guitarString: 3, fret: 10, beatCount: 8, type: "normal" },
      { guitarString: 3, fret: 8, beatCount: 16, type: "normal" },
      { guitarString: 3, fret: 7, beatCount: 24, type: "normal" },
      { guitarString: 2, fret: 8, beatCount: 28, type: "normal" },
    ],
    [
      { guitarString: 1, fret: 8, beatCount: 0, type: "normal" },
      { guitarString: 2, fret: 8, beatCount: 8, type: "normal" },
      { guitarString: 3, fret: 10, beatCount: 12, type: "normal" },
      { guitarString: 2, fret: 8, beatCount: 20, type: "normal" },
      { guitarString: 1, fret: 0, beatCount: 24, type: "normal" },
    ],
    [
      { guitarString: 2, fret: 0, beatCount: 4, type: "normal" },
      { guitarString: 3, fret: 10, beatCount: 8, type: "normal" },
      { guitarString: 3, fret: 8, beatCount: 16, type: "normal" },
      { guitarString: 3, fret: 7, beatCount: 24, type: "normal" },
      { guitarString: 2, fret: 8, beatCount: 28, type: "normal" },
    ],
    [
      { guitarString: 1, fret: 7, beatCount: 0, type: "normal" },
      { guitarString: 2, fret: 7, beatCount: 8, type: "normal" },
      { guitarString: 3, fret: 10, beatCount: 12, type: "normal" },
      { guitarString: 2, fret: 7, beatCount: 20, type: "normal" },
      { guitarString: 1, fret: 10, beatCount: 24, type: "normal" },
      { guitarString: 2, fret: 10, beatCount: 24, type: "normal" },
      { guitarString: 3, fret: 10, beatCount: 24, type: "normal" },
    ],
  ],
};
