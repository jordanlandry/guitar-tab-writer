import { songType } from "./interfaces";

export const song2: songType = {
  name: "Never too late",
  artist: "Three Days Grace",
  bpm: 100,

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
      { guitarString: 6, fret: 3, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 0, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 0, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 0, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 2, beatCount: 0, type: "normal", instrument: 0 },
      { guitarString: 1, fret: 3, beatCount: 0, type: "normal", instrument: 0 },

      { guitarString: 6, fret: 3, beatCount: 6, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 0, beatCount: 17, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 0, beatCount: 9, type: "normal", instrument: 0 },
      { guitarString: 1, fret: 3, beatCount: 11, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 0, beatCount: 13, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 2, beatCount: 15, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 6, fret: 3, beatCount: 5, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 0, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 0, beatCount: 3, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 0, beatCount: 2, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 2, beatCount: 1, type: "normal", instrument: 0 },
      { guitarString: 1, fret: 3, beatCount: 0, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 6, fret: 3, beatCount: 5, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 0, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 0, beatCount: 3, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 0, beatCount: 2, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 2, beatCount: 1, type: "normal", instrument: 0 },
      { guitarString: 1, fret: 3, beatCount: 0, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 6, fret: 3, beatCount: 5, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 0, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 0, beatCount: 3, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 0, beatCount: 2, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 2, beatCount: 1, type: "normal", instrument: 0 },
      { guitarString: 1, fret: 3, beatCount: 0, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 6, fret: 3, beatCount: 5, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 0, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 0, beatCount: 3, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 0, beatCount: 2, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 2, beatCount: 1, type: "normal", instrument: 0 },
      { guitarString: 1, fret: 3, beatCount: 0, type: "normal", instrument: 0 },
    ],
    [
      { guitarString: 6, fret: 3, beatCount: 5, type: "normal", instrument: 0 },
      { guitarString: 5, fret: 0, beatCount: 4, type: "normal", instrument: 0 },
      { guitarString: 4, fret: 0, beatCount: 3, type: "normal", instrument: 0 },
      { guitarString: 3, fret: 0, beatCount: 2, type: "normal", instrument: 0 },
      { guitarString: 2, fret: 2, beatCount: 1, type: "normal", instrument: 0 },
      { guitarString: 1, fret: 3, beatCount: 0, type: "normal", instrument: 0 },
    ],
  ],
};
