import { songType } from "./interfaces";

export const test: songType = {
  name: "Under a glass moon solo",
  bpm: 146,

  tuning: ["e2", "a3", "d3", "g3", "b4", "e4"],

  // Should play a G chord

  // This isn't how you will write tabs, this is just how it will be stored and read
  data: [
    [
      { guitarString: 1, fret: 0, beatCount: 0, type: "normal" },
      { guitarString: 2, fret: 2, beatCount: 0, type: "normal" },
      { guitarString: 3, fret: 2, beatCount: 0, type: "normal" },
      { guitarString: 4, fret: 0, beatCount: 0, type: "normal" },
      { guitarString: 5, fret: 0, beatCount: 0, type: "normal" },
      { guitarString: 6, fret: 0, beatCount: 0, type: "normal" },
    ],
    [
      { guitarString: 1, fret: 3, beatCount: 0, type: "normal" },
      { guitarString: 2, fret: 2, beatCount: 1, type: "normal" },
      { guitarString: 3, fret: 0, beatCount: 2, type: "normal" },
      { guitarString: 4, fret: 0, beatCount: 3, type: "normal" },
      { guitarString: 5, fret: 0, beatCount: 4, type: "normal" },
      { guitarString: 6, fret: 3, beatCount: 5, type: "normal" },
    ],
    [
      { guitarString: 1, fret: 3, beatCount: 0, type: "normal" },
      { guitarString: 2, fret: 3, beatCount: 1, type: "normal" },
      { guitarString: 3, fret: 2, beatCount: 2, type: "normal" },
      { guitarString: 4, fret: 0, beatCount: 3, type: "normal" },
      { guitarString: 5, fret: 0, beatCount: 4, type: "normal" },
      { guitarString: 6, fret: 0, beatCount: 5, type: "normal" },

      { guitarString: 2, fret: 3, beatCount: 12, type: "normal" },
      { guitarString: 3, fret: 2, beatCount: 13, type: "normal" },
      { guitarString: 4, fret: 0, beatCount: 14, type: "normal" },
      { guitarString: 5, fret: 0, beatCount: 15, type: "normal" },
      { guitarString: 6, fret: 0, beatCount: 16, type: "normal" },
    ],
  ],
};
