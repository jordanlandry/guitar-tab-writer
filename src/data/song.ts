import { songType } from "./interfaces";

export const song: songType = {
  name: "Never too late",
  artist: "Three Days Grace",
  bpm: 154,

  tuning: ["d2", "a3", "d3", "g3", "b4", "e4"],

  // Should play a G chord

  // This isn't how you will write tabs, this is just how it will be stored and read

  instruments: [
    {
      name: "Acoustic Lead",
      index: 0,
      sound: "", // Blank for now until we add more sounds, blank will use the default guitar sound
    },
  ],

  measures: [
    [
      { guitarString: 1, fret: 8, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 8, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 10, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 8, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 1, fret: 0, beatCount: 24, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 2, fret: 0, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 10, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 8, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 7, beatCount: 24, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 8, beatCount: 28, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 1, fret: 8, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 8, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 10, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 8, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 1, fret: 0, beatCount: 24, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 2, fret: 0, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 10, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 8, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 7, beatCount: 24, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 8, beatCount: 28, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 1, fret: 8, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 8, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 10, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 8, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 1, fret: 0, beatCount: 24, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 2, fret: 0, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 10, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 8, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 7, beatCount: 24, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 8, beatCount: 28, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 1, fret: 7, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 7, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 10, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 7, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 1, fret: 10, beatCount: 24, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 10, beatCount: 24, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 10, beatCount: 24, type: "normal", instrument: 0 },
    ],
  ],
};
