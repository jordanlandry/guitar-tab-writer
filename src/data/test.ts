import { songType } from "./interfaces";

export const test: songType = {
  name: "Through the fire and flames",
  artist: "Dragonforce",
  bpm: 200,

  tuning: ["e2", "a3", "d3", "g3", "b4", "e4"],

  // Should play a G chord

  // This isn't how you will write tabs, this is just how it will be stored and read
  instruments: [
    {
      name: "Guitar",
      index: 0,
      sound: "", // Blank for now until we add more sounds, blank will use the default guitar sound
    },
  ],
  measures: [
    [
      { guitarString: 3, fret: 13, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 12, beatCount: 2, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 15, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 12, beatCount: 6, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 15, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 11, beatCount: 10, type: "normal", instrument: 0 },
      { guitarString: 1, fret: 15, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 11, beatCount: 14, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 15, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 12, beatCount: 18, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 13, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 15, beatCount: 22, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 12, beatCount: 24, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 15, beatCount: 26, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 12, beatCount: 28, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 13, beatCount: 30, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 4, fret: 12, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 13, beatCount: 2, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 13, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 15, beatCount: 6, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 13, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 15, beatCount: 10, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 15, beatCount: 14, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 18, beatCount: 18, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 18, beatCount: 22, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 19, beatCount: 23, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 20, beatCount: 24, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 6, fret: 13, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 2, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 15, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 13, beatCount: 6, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 13, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 13, beatCount: 10, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 15, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 14, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 13, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 18, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 13, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 15, beatCount: 22, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 13, beatCount: 24, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 15, beatCount: 26, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 16, beatCount: 28, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 18, beatCount: 30, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 6, fret: 16, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 15, beatCount: 2, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 18, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 15, beatCount: 6, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 18, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 10, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 15, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 14, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 18, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 19, beatCount: 17, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 20, beatCount: 18, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 21, beatCount: 19, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 6, fret: 20, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 18, beatCount: 2, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 20, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 16, beatCount: 6, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 20, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 15, beatCount: 10, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 13, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 14, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 15, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 13, beatCount: 18, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 15, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 13, beatCount: 22, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 15, beatCount: 24, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 16, beatCount: 26, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 18, beatCount: 28, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 18, beatCount: 30, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 6, fret: 18, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 16, beatCount: 2, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 18, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 15, beatCount: 6, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 18, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 13, beatCount: 10, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 15, beatCount: 14, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 13, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 15, beatCount: 18, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 13, beatCount: 22, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 16, beatCount: 24, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 5, fret: 13, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 2, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 13, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 6, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 13, beatCount: 8, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 15, beatCount: 10, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 13, beatCount: 12, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 14, type: "normal", instrument: 0 },
      { guitarString: 6, fret: 13, beatCount: 16, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 18, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 15, beatCount: 20, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 16, beatCount: 22, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 15, beatCount: 24, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 13, beatCount: 26, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 15, beatCount: 28, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 12, beatCount: 30, type: "normal", instrument: 0 },
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ],
};
