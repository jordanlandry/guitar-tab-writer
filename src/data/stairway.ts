import { songType } from "./interfaces";

export const stairway: songType = {
  name: "Stairway To Heaven",
  artist: "Led Zeppelin",
  bpm: 82,
  tuning: ["e2", "a3", "d3", "g3", "b4", "e4"],

  instruments: [
    {
      name: "Guitar",
      index: 0,
      sound: "", // Blank for now until we add more sounds, blank will use the default guitar sound
    },
  ],
  measures: [
    [
      { guitarString: 3, fret: 7, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 5, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 5, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 5, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 6, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 7, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 5, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 5, beatCount: 24, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 7, beatCount: 28, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 6, fret: 8, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 5, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 5, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 5, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 8, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 2, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 4, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 3, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 2, beatCount: 24, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 2, beatCount: 28, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 6, fret: 0, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 3, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 1, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 2, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 1, beatCount: 12, type: "normal", instrument: 0 },

      { guitarString: 6, fret: 0, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 1, beatCount: 24, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 2, beatCount: 28, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 2, fret: 2, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 0, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 0, beatCount: 0, type: "normal", instrument: 0 },

      { guitarString: 2, fret: 0, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 2, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 2, beatCount: 4, type: "normal", instrument: 0 },

      { guitarString: 2, fret: 0, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 2, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 2, beatCount: 8, type: "normal", instrument: 0 },
    ],
  ],
};
