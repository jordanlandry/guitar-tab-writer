import nextId from "react-id-generator";
import { songType } from "./interfaces";

const oneSong: songType = {
  name: "One",
  artist: "Metallica",
  bpm: 108,
  tuning: ["e4", "b4", "g3", "d3", "a3", "e2"], // From high e to low e

  instruments: [
    {
      name: "Acoustic Rhythm",
      index: 0,
      sound: "", // Blank for now until we add more sounds, blank will use the default guitar sound
    },

    {
      name: "Acoustic Lead",
      index: 1,
      sound: "",
    },
  ],
  measures: [
    [
      { guitarString: 5, fret: 2, beatCount: 0, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 4, beatCount: 4, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 5, fret: 2, beatCount: 8, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 12, type: "normal", instrument: 0, id: nextId() },
    ],
    [
      { guitarString: 6, fret: 3, beatCount: 0, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 4, beatCount: 4, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 6, fret: 3, beatCount: 8, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 12, type: "normal", instrument: 0, id: nextId() },
    ],
    [
      { guitarString: 5, fret: 2, beatCount: 0, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 4, beatCount: 4, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 5, fret: 2, beatCount: 8, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 12, type: "normal", instrument: 0, id: nextId() },
    ],
    [
      { guitarString: 6, fret: 3, beatCount: 0, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 4, beatCount: 4, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 6, fret: 3, beatCount: 8, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 12, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 3, fret: 0, beatCount: 20, type: "normal", instrument: 0, id: nextId() },
    ],
    [
      { guitarString: 5, fret: 2, beatCount: 0, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 4, beatCount: 4, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 5, fret: 2, beatCount: 8, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 12, type: "normal", instrument: 0, id: nextId() },

      { guitarString: 4, fret: 2, beatCount: 4, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 4, fret: 4, beatCount: 6, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 3, fret: 2, beatCount: 8, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 3, fret: 6, beatCount: 10, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 3, fret: 4, beatCount: 12, type: "normal", instrument: 1, id: nextId() },
    ],
    [
      { guitarString: 6, fret: 3, beatCount: 0, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 4, beatCount: 4, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 6, fret: 3, beatCount: 8, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 12, type: "normal", instrument: 0, id: nextId() },

      { guitarString: 2, fret: 3, beatCount: 4, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 2, fret: 2, beatCount: 6, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 3, fret: 4, beatCount: 8, type: "normal", instrument: 1, id: nextId() },

      { guitarString: 2, fret: 3, beatCount: 16, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 2, fret: 2, beatCount: 18, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 3, fret: 2, beatCount: 20, type: "normal", instrument: 1, id: nextId() },

      { guitarString: 2, fret: 3, beatCount: 28, type: "normal", instrument: 1, id: nextId() },
    ],
    [
      { guitarString: 5, fret: 2, beatCount: 0, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 4, beatCount: 4, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 5, fret: 2, beatCount: 8, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 12, type: "normal", instrument: 0, id: nextId() },

      { guitarString: 2, fret: 3, beatCount: 0, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 2, fret: 2, beatCount: 2, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 3, fret: 4, beatCount: 4, type: "normal", instrument: 1, id: nextId() },
    ],
    [
      { guitarString: 6, fret: 3, beatCount: 0, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 4, beatCount: 4, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 6, fret: 3, beatCount: 8, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 12, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 3, fret: 0, beatCount: 20, type: "normal", instrument: 0, id: nextId() },

      { guitarString: 3, fret: 11, beatCount: 4, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 3, fret: 9, beatCount: 6, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 8, type: "normal", instrument: 1, id: nextId() },

      { guitarString: 3, fret: 9, beatCount: 10, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 3, fret: 7, beatCount: 12, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 14, type: "normal", instrument: 1, id: nextId() },

      { guitarString: 3, fret: 7, beatCount: 16, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 3, fret: 6, beatCount: 18, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 20, type: "normal", instrument: 1, id: nextId() },

      { guitarString: 3, fret: 6, beatCount: 22, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 3, fret: 4, beatCount: 24, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 26, type: "normal", instrument: 1, id: nextId() },

      { guitarString: 3, fret: 2, beatCount: 28, type: "normal", instrument: 1, id: nextId() },
    ],
    [
      { guitarString: 5, fret: 2, beatCount: 0, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 4, beatCount: 4, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 5, fret: 2, beatCount: 8, type: "normal", instrument: 0, id: nextId() },
      { guitarString: 4, fret: 0, beatCount: 12, type: "normal", instrument: 0, id: nextId() },

      { guitarString: 3, fret: 2, beatCount: 0, type: "normal", instrument: 1, id: nextId() },
      { guitarString: 3, fret: 4, beatCount: 2, type: "normal", instrument: 1, id: nextId() },
    ],
  ],
};

export default oneSong;
