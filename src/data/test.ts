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

    { guitarString: 6, fret: 3, beatCount: 2, type: "normal" },
    { guitarString: 5, fret: 0, beatCount: 2, type: "normal" },
    { guitarString: 4, fret: 0, beatCount: 2, type: "normal" },
    { guitarString: 3, fret: 0, beatCount: 2, type: "normal" },
    { guitarString: 2, fret: 2, beatCount: 2, type: "normal" },
    { guitarString: 1, fret: 3, beatCount: 2, type: "normal" },

    { guitarString: 6, fret: 3, beatCount: 3, type: "normal" },
    { guitarString: 5, fret: 0, beatCount: 3, type: "normal" },
    { guitarString: 4, fret: 0, beatCount: 3, type: "normal" },
    { guitarString: 3, fret: 0, beatCount: 3, type: "normal" },
    { guitarString: 2, fret: 2, beatCount: 3, type: "normal" },
    { guitarString: 1, fret: 3, beatCount: 3, type: "normal" },

    { guitarString: 6, fret: 3, beatCount: 5, type: "normal" },
    { guitarString: 5, fret: 0, beatCount: 5, type: "normal" },
    { guitarString: 4, fret: 0, beatCount: 5, type: "normal" },
    { guitarString: 3, fret: 0, beatCount: 5, type: "normal" },
    { guitarString: 2, fret: 2, beatCount: 5, type: "normal" },
    { guitarString: 1, fret: 3, beatCount: 5, type: "normal" },

    { guitarString: 6, fret: 3, beatCount: 6, type: "normal" },
    { guitarString: 5, fret: 0, beatCount: 7, type: "normal" },
    { guitarString: 4, fret: 0, beatCount: 8, type: "normal" },
    { guitarString: 3, fret: 0, beatCount: 9, type: "normal" },
    { guitarString: 2, fret: 2, beatCount: 10, type: "normal" },
    { guitarString: 1, fret: 3, beatCount: 11, type: "normal" },

    { guitarString: 6, fret: 3, beatCount: 17, type: "normal" },
    { guitarString: 5, fret: 0, beatCount: 16, type: "normal" },
    { guitarString: 4, fret: 0, beatCount: 15, type: "normal" },
    { guitarString: 3, fret: 0, beatCount: 14, type: "normal" },
    { guitarString: 2, fret: 2, beatCount: 13, type: "normal" },
    { guitarString: 1, fret: 3, beatCount: 12, type: "normal" },

    { guitarString: 6, fret: 3, beatCount: 18, type: "normal" },
    { guitarString: 5, fret: 0, beatCount: 18, type: "normal" },
    { guitarString: 4, fret: 0, beatCount: 18, type: "normal" },
    { guitarString: 3, fret: 0, beatCount: 18, type: "normal" },
    { guitarString: 2, fret: 2, beatCount: 18, type: "normal" },
    { guitarString: 1, fret: 3, beatCount: 18, type: "normal" },
  ],
};
