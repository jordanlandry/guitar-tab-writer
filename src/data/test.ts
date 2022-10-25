import { songType } from "./interfaces";

export const test: songType = {
  name: "Under a glass moon solo",
  bpm: 146,

  tuning: ["e2", "a3", "d3", "g3", "b4", "e4"],

  // Should play a G chord

  // This isn't how you will write tabs, this is just how it will be stored and read
  data: [
    { guitarString: 6, fret: 12, beatCount: 1, type: "normal" },
    { guitarString: 5, fret: 14, beatCount: 1, type: "normal" },

    { guitarString: 5, fret: 14, beatCount: 2, type: "normal" },
    { guitarString: 5, fret: 14, beatCount: 3, type: "normal" },
    { guitarString: 5, fret: 14, beatCount: 4, type: "normal" },

    { guitarString: 5, fret: 12, beatCount: 5, type: "normal" },

    { guitarString: 5, fret: 12, beatCount: 6, type: "normal" },
    { guitarString: 5, fret: 12, beatCount: 7, type: "normal" },
    { guitarString: 5, fret: 12, beatCount: 8, type: "normal" },

    { guitarString: 5, fret: 7, beatCount: 9, type: "normal" },

    { guitarString: 5, fret: 7, beatCount: 10, type: "normal" },
    { guitarString: 5, fret: 7, beatCount: 11, type: "normal" },
    { guitarString: 5, fret: 7, beatCount: 12, type: "normal" },

    { guitarString: 5, fret: 9, beatCount: 13, type: "normal" },

    { guitarString: 5, fret: 9, beatCount: 14, type: "normal" },
    { guitarString: 5, fret: 9, beatCount: 15, type: "normal" },
    { guitarString: 5, fret: 9, beatCount: 16, type: "normal" },

    { guitarString: 5, fret: 5, beatCount: 17, type: "normal" },

    { guitarString: 5, fret: 5, beatCount: 18, type: "normal" },
    { guitarString: 5, fret: 5, beatCount: 19, type: "normal" },

    { guitarString: 5, fret: 4, beatCount: 20, type: "normal" },
    { guitarString: 5, fret: 5, beatCount: 21, type: "normal" },
    { guitarString: 5, fret: 4, beatCount: 22, type: "normal" },
    { guitarString: 4, fret: 6, beatCount: 23, type: "normal" },
    { guitarString: 4, fret: 4, beatCount: 24, type: "normal" },
    { guitarString: 4, fret: 8, beatCount: 25, type: "normal" },
    { guitarString: 4, fret: 4, beatCount: 26, type: "normal" },

    { guitarString: 3, fret: 6, beatCount: 27, type: "normal" },
    { guitarString: 3, fret: 4, beatCount: 28, type: "normal" },
    { guitarString: 2, fret: 6, beatCount: 29, type: "normal" },

    { guitarString: 5, fret: 16, beatCount: 32, type: "normal" },
    { guitarString: 6, fret: 12, beatCount: 33, type: "normal" },

    { guitarString: 6, fret: 16, beatCount: 34, type: "normal" },
    { guitarString: 6, fret: 12, beatCount: 35, type: "normal" },
    { guitarString: 5, fret: 16, beatCount: 36, type: "normal" },
    { guitarString: 5, fret: 12, beatCount: 37, type: "normal" },

    { guitarString: 4, fret: 13, beatCount: 38, type: "normal" },
    { guitarString: 4, fret: 9, beatCount: 39, type: "normal" },
    { guitarString: 3, fret: 13, beatCount: 40, type: "normal" },
    { guitarString: 3, fret: 9, beatCount: 41, type: "normal" },

    { guitarString: 2, fret: 11, beatCount: 42, type: "normal" },
    { guitarString: 2, fret: 7, beatCount: 43, type: "normal" },
    { guitarString: 1, fret: 11, beatCount: 44, type: "normal" },
    { guitarString: 1, fret: 7, beatCount: 45, type: "normal" },

    { guitarString: 1, fret: 0, beatCount: 46, type: "normal" },
    { guitarString: 1, fret: 12, beatCount: 48, type: "normal" },
    { guitarString: 1, fret: 4, beatCount: 50, type: "normal" },
    { guitarString: 1, fret: 7, beatCount: 52, type: "normal" },

    // { guitarString: 6, fret: 3, beatCount: 1, type: "normal" },
    // { guitarString: 5, fret: 0, beatCount: 1, type: "normal" },
    // { guitarString: 4, fret: 0, beatCount: 1, type: "normal" },
    // { guitarString: 3, fret: 0, beatCount: 1, type: "normal" },
    // { guitarString: 2, fret: 2, beatCount: 1, type: "normal" },
    // { guitarString: 1, fret: 3, beatCount: 1, type: "normal" },

    // { guitarString: 6, fret: 3, beatCount: 2, type: "normal" },
    // { guitarString: 5, fret: 0, beatCount: 2, type: "normal" },
    // { guitarString: 4, fret: 0, beatCount: 2, type: "normal" },
    // { guitarString: 3, fret: 0, beatCount: 2, type: "normal" },
    // { guitarString: 2, fret: 2, beatCount: 2, type: "normal" },
    // { guitarString: 1, fret: 3, beatCount: 2, type: "normal" },

    // { guitarString: 6, fret: 3, beatCount: 3, type: "normal" },
    // { guitarString: 5, fret: 0, beatCount: 3, type: "normal" },
    // { guitarString: 4, fret: 0, beatCount: 3, type: "normal" },
    // { guitarString: 3, fret: 0, beatCount: 3, type: "normal" },
    // { guitarString: 2, fret: 2, beatCount: 3, type: "normal" },
    // { guitarString: 1, fret: 3, beatCount: 3, type: "normal" },

    // { guitarString: 6, fret: 3, beatCount: 5, type: "normal" },
    // { guitarString: 5, fret: 0, beatCount: 5, type: "normal" },
    // { guitarString: 4, fret: 0, beatCount: 5, type: "normal" },
    // { guitarString: 3, fret: 0, beatCount: 5, type: "normal" },
    // { guitarString: 2, fret: 2, beatCount: 5, type: "normal" },
    // { guitarString: 1, fret: 3, beatCount: 5, type: "normal" },

    // { guitarString: 6, fret: 3, beatCount: 6, type: "normal" },
    // { guitarString: 5, fret: 0, beatCount: 7, type: "normal" },
    // { guitarString: 4, fret: 0, beatCount: 8, type: "normal" },
    // { guitarString: 3, fret: 0, beatCount: 9, type: "normal" },
    // { guitarString: 2, fret: 2, beatCount: 10, type: "normal" },
    // { guitarString: 1, fret: 3, beatCount: 11, type: "normal" },

    // { guitarString: 6, fret: 3, beatCount: 17, type: "normal" },
    // { guitarString: 5, fret: 0, beatCount: 16, type: "normal" },
    // { guitarString: 4, fret: 0, beatCount: 15, type: "normal" },
    // { guitarString: 3, fret: 0, beatCount: 14, type: "normal" },
    // { guitarString: 2, fret: 2, beatCount: 13, type: "normal" },
    // { guitarString: 1, fret: 3, beatCount: 12, type: "normal" },

    // { guitarString: 6, fret: 3, beatCount: 18, type: "normal" },
    // { guitarString: 5, fret: 0, beatCount: 18, type: "normal" },
    // { guitarString: 4, fret: 0, beatCount: 18, type: "normal" },
    // { guitarString: 3, fret: 0, beatCount: 18, type: "normal" },
    // { guitarString: 2, fret: 2, beatCount: 18, type: "normal" },
    // { guitarString: 1, fret: 3, beatCount: 18, type: "normal" },

    // { guitarString: 1, fret: 0, beatCount: 20, type: "normal" },
    // { guitarString: 1, fret: 0, beatCount: 21, type: "normal" },
    // { guitarString: 1, fret: 0, beatCount: 22, type: "normal" },
  ],
};
